import { MetaFunction } from "@remix-run/react/routeModules";
import { useLoaderData } from "remix";
import { getUserSession } from "~/sessions";
import Printbox from "~/utils/printbox";
import Project from "~/utils/project";
import Modal from "~/components/modal";
import { useState } from "react";
import ReactTooltip from 'react-tooltip';


export async function loader({ request }: any) {
    const session: any = await getUserSession(request)
    console.log('SESSION: ', session);

    if (!session.customer_id) {
        return session
    }

    const delete_locked_projects = await Project.deleteLockedProjects(session.session_id);
    const all_projects = await Printbox.getProjects(session.customer_id);
    const locked_projects = await Project.getLockedProjects(session.customer_id);

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

    const locked_projects_ids = [];
    if (locked_projects) {
      var locked_projects_data = locked_projects.data;
      for (var i in locked_projects_data) {
        locked_projects_ids.push(locked_projects_data[i].project_id);
      }
    }

    return {
        session,
        projects,
        locked_projects,
        locked_projects_ids
    }
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export default function Index() {
  const data = useLoaderData();
  const [openModal, setopenModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectId, setProjectId] = useState("");

  const checkEdit = (event: any, projectId: any, projectName: any, is_subscribed:any) => {
    event.preventDefault();
    if (data.locked_projects_ids.includes(projectId)) {
      setopenModal(true)
      setProjectName(projectName)
      setProjectId(projectId)
    } else {
      confirmEdit(projectId,is_subscribed)
    }
  };

  const confirmEdit = (projectId: any, is_subscribed: any) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/projects/lockproject?project_id="+projectId, true);
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        location.href = '/projects/set-session?projectId='+projectId;   
      }
    }

    xhttp.send();      
  }

  const checkDelete = async (event: any, projectId: any, projectName: any) => {
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
    event.preventDefault();
  };

  return (
    <div className="justify-content-center my3">
        <div className="w100">
            <div className="tc">
              {data.projects.length > 0? 
              <>
                <h2>Choose a project to edit</h2>
                <div className="my3">
                  <Modal isOpen={openModal}>
                    <h1>Warning!</h1>
                    <h3>This project {projectName} is being edited by somebody else. If you continue, they lose all of their edits.</h3>
                    <div>
                      <div onClick={() => setopenModal(false)} className="grid-child">
                        <h3>Cancel <br /> Take me back</h3>
                      </div>
                      <div onClick={() => confirmEdit(projectId, data.session.is_subscribed)} className="grid-child">
                        <h3>Continue <br /> I understand the risk</h3>
                      </div>
                    </div>
                  </Modal>
                  <div className="project_list_flex my3">
                  {data.projects.map((project: any) => (                                 
                    <div className="project_list_wrapper" id={project.id} key={project.number}>
                      <a href="#" onClick={event => checkEdit(event, project.id, project.name, data.session.is_subscribed)}>
                        <div>
                          <img className="product-list-image" src={project.thumbnail_url} alt="Printing Press Newspaper - pp_newspaper_stack" ></img>  
                        </div>
                        <div>
                          {project.name}
                        </div>
                      </a>
                      <div className="product-list-icon-wrapper">
                          <div className="product-list-icon-lock">
                            {data.locked_projects_ids.includes(project.id)?
                            <>
                              <img className="product-list-lock" data-tip data-for='lock' src="/images/lock.svg"></img>
                              <ReactTooltip id='lock' type="success">
                                <span>Locked</span>
                              </ReactTooltip>
                            </> : <>
                              <img className="product-list-lock" data-tip data-for='unlock' src="/images/unlock.svg"></img>
                              <ReactTooltip id='unlock' type="success">
                                <span>Unlocked</span>
                              </ReactTooltip>
                            </>
                            }                            
                          </div>
                          <div className="product-list-icon-delete">
                            <a href="#" data-tip data-for='delete' onClick={event => checkDelete(event, project.id, project.name)}>
                              <img className="product-list-delete" src="/images/delete.png"></img>
                            </a>
                          </div>
                          <ReactTooltip id='delete' type="success">
                            <span>Delete the project</span>
                          </ReactTooltip>
                      </div>
                    </div>
                    ))}                    
                  </div>  
                </div>
              </> : <>
                <h2>You don't currently have any projects underway.</h2>
              </>
              }
            </div>
        </div>
    </div>
  );
}
