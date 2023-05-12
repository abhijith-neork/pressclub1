import { MetaFunction, redirect } from "@remix-run/react/routeModules";
import { useLoaderData } from "remix";
import { getUserSession } from "~/sessions";
import Printbox from "~/utils/printbox";
import ReactTooltip from 'react-tooltip';


export async function loader({ request }: any) {
    const session: any = await getUserSession(request)
    console.log('SESSION: ', session);

    let url = new URL(request.url);
    let copyStatus = url.searchParams.get("copy");

    if (!session.customer_id) {
        return session
    }

    const all_projects = await Printbox.getProjectsCompleted(session.customer_id);

    const projects = [];
    const projects_ids = [];
    if (all_projects) {
      var projects_data = all_projects.results;
      for (var i in projects_data) {
        if (projects_data[i].is_saved) {
          projects.push(projects_data[i]);
        }
      }
    }

    return {
        session,
        projects,
        copyStatus
    }
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export default function Index() {
  const data = useLoaderData(); //console.log('dd',data.session.is_subscribed);

  let copyStatusMessage = '';
  if (data.copyStatus == 'failed') {
    copyStatusMessage = 'Sorry, could not copied the project.<br>Please try again later.';
  }

  const showDownload = (event: any, projectId: any, projectName: any, is_subscribed: any) => {
    event.preventDefault();
      location.href = '/orders/download-pdf?projectId='+projectId+'&isCompleted=1';  
  };

  const checkDelete = async (event: any, projectId: any, projectName: any) => {
    event.preventDefault();
    if (confirm("Are you sure to delete the project '"+projectName+"'?")) {
      const xhttp = new XMLHttpRequest();
      xhttp.open("GET", "/projects/deleteproject?project_id="+projectId, true);

      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const element = document.getElementById(projectId);
          element ? element.remove() : null;
        }
      }

      xhttp.send();
    }     
  };

  const copyProject = async (event: any, projectId: any, projectName: any, is_subscribed: any) => {
    event.preventDefault();
    if (confirm("Are you sure to copy the project '"+projectName+"'?")) {    
        if(is_subscribed)
        {
          location.href = '/projects/copy-project?project_id='+projectId;  
        }    
        else
        {
          location.href = '/projects/copy-project-free-user?project_id='+projectId;   
        }
    }
  };

  return (
    <div className="justify-content-center my3">
        <div className="w100">
            <div className="tc">
              <h2 dangerouslySetInnerHTML={{__html: copyStatusMessage}}></h2>
              {data.projects.length > 0? 
              <>
                <h2>Completed projects</h2>
                <div>
                In order to edit a completed project, or to order more copies from our printers, please duplicate the project first.
                </div>
                <div>                  
                  <div className="project_list_flex my3">
                  {data.projects.map((project: any) => (                                 
                    <div className="project_list_wrapper" id={project.id} key={project.number}>
                      <a href="#" onClick={event => showDownload(event, project.id, project.name, data.session.is_subscribed)}>
                        <div>
                          <img className="product-list-image" src={project.thumbnail_url} alt="Printing Press Newspaper - pp_newspaper_stack" ></img>  
                        </div>
                        <div>
                          {project.name}
                        </div>
                      </a>
                      <div>
                          <div className="product-list-icon-copy">
                            <a href="/" data-tip data-for='copy_completed' onClick={event => copyProject(event, project.id, project.name, data.session.is_subscribed)}>
                              <button type="submit" className="btn teal btn-home-page" style={{width:'350px'}}>Duplicate project</button>                              
                            </a>                         
                          </div>
                          {/* <ReactTooltip id='copy_completed' type="success">
                            <span>Duplicate the project</span>
                          </ReactTooltip> */}
                      </div>
                    </div>
                    ))}                    
                  </div>  
                </div>
              </> : <>
                <h2>You have no completed projects</h2>
              </>
              }
            </div>
        </div>
    </div>
  );
}
