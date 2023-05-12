import { MetaFunction, useLoaderData } from "remix";
import { getUserSession, createUserSession } from "~/sessions";
import Project from "~/utils/project";
import {retrieveSubscriptionSession} from '~/create-checkout-session';
import {getCustomerSubscription} from '~/create-checkout-session';
import {getCustomerSubscriptionById} from '~/create-checkout-session';
import {getSubscriptionStartEndDates} from '~/create-checkout-session';
import { getProfile } from "~/profile";
import { getSchoolData } from "~/profile";
import { updateProfile } from "~/profile";
import Printbox from "~/utils/printbox";
import ReactTooltip from 'react-tooltip';


import {
  Form,
  Link,
  Links,
} from "remix";
import type { LinksFunction } from "remix";

export async function loader({ request }: any) {
  const session = await getUserSession(request);
  console.log('session: ', session);

  const user_categoryPath =  process.env.CATEGORY_PATH_USER;

  let url = new URL(request.url);
  let checkoutSessionId = url.searchParams.get("session_id");
  let subscriptionAttempt = url.searchParams.get("subscription_attempt");

  const customer = await Printbox.getCustomer(session.customer_id); 
console.log('customer: ', customer);

  // if subscribed, get profile so we can get orders
  const profile: any = await getProfile(session.id)
  console.log('PROFILE: ', profile)


  // Get school details
  const school = await getSchoolData(profile.data[0]?.school)
  console.log('SCHOOL--:', school.data[0])

  const all_completed_projects = await Printbox.getProjectsCompleted(session.customer_id);
  const completed_list = all_completed_projects.count;
  const all_projects = await Printbox.getProjects(session.customer_id);

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

  const edit_list = projects.length;

  if (session && session.session_id) {
    const delete_locked_projects = await Project.deleteLockedProjects(session.session_id);   
    
    if (checkoutSessionId) {
      const retreiveSession = await retrieveSubscriptionSession(checkoutSessionId);
      
      if (retreiveSession.is_session && retreiveSession.customer.email == session.email) {
        const getSubscription = await getCustomerSubscription(retreiveSession.customer.id);

        if (getSubscription.data[0].id) {
          const subscriptionDetail = await getCustomerSubscriptionById(getSubscription.data[0].id);
          const getSubscriptionDates = await getSubscriptionStartEndDates(subscriptionDetail.current_period_start, subscriptionDetail.current_period_end);

          const result = await updateProfile(session.id, {
            subscriptions: [getSubscription.data[0].id],
            subscription_start_date: getSubscriptionDates.subscription_start_date,
            subscription_end_date: getSubscriptionDates.subscription_end_date
          });
          console.log('result: ', result);

          const sgMail = require('@sendgrid/mail');
          sgMail.setApiKey(process.env.SENDGRID_API_KEY);

          const site_url = process.env.SITE_URL;

          const school_name_new = school.data[0]['name']; console.log('school_name', school_name_new);
          var message = 'Hi '+school_name_new+',<br><br>';

          message += 'You have successfully subscribed with Pressclub.<br><br>';
          message += '<a href="'+site_url+'">Visit Pressclub</a><br><br>';
          message += 'Regards,<br>Team Pressclub';

          const msg = {
            to: session.email,
            from: process.env.FROM_EMAIL,
            subject: 'Welcome to Pressclub',
            html: message,
          }; console.log('dddddddddddddddddddd-',msg);
          sgMail.send(msg);

          return await createUserSession({
            ...session,
            is_subscribed: true
          }, '/?subscription_attempt=success')
        }
      } else if (!retreiveSession.is_session) {
        subscriptionAttempt = 'failed';
      }
    } else {
      //update the subscription dates of the current user
      // const profileResponse: any = await getProfile(session.id);
      // console.log('profileResponse: ', profileResponse);
      // if (profileResponse.data[0].subscriptions && profileResponse.data[0].subscriptions[0]) {
      //   const subscriptionDetail = await getCustomerSubscriptionById(profileResponse.data[0].subscriptions[0]);
      //   const getSubscriptionDates = await getSubscriptionStartEndDates(subscriptionDetail.current_period_start, subscriptionDetail.current_period_end);

      //   const result = await updateProfile(session.id, {
      //     subscription_start_date: getSubscriptionDates.subscription_start_date,
      //     subscription_end_date: getSubscriptionDates.subscription_end_date
      //   });
      // }
    }

  }   

  return {
    session: session,
    checkout_session_id: checkoutSessionId,
    subscriptionAttempt: subscriptionAttempt,
    completed_list,
    edit_list,
    user_categoryPath
  }
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export default function Index() {
  const data = useLoaderData(); console.log('SESSION--', data);

  let subscriptionStatus = '';
  if (data.subscriptionAttempt == 'success') {
    subscriptionStatus = 'Thanks for you subscription!<br>Check your email for confirmation';
  } else if (data.subscriptionAttempt == 'failed') {
    subscriptionStatus = 'Sorry, your subscription attempt failed.<br>Please try again later';
  } else if (data.subscriptionAttempt == 'cancelled') {
    subscriptionStatus = 'You have cancelled your subscription attempt.<br>Please try again later';
  } else if (data.subscriptionAttempt == 'subscription_cancelled') {
    subscriptionStatus = 'You have cancelled your subscription';
  } else if (data.subscriptionAttempt == 'subscription_cancelled_failed') {
    subscriptionStatus = 'Your subscription could not be cancelled.<br>Please try again later';
  } else if (data.subscriptionAttempt == 'payment_failed') {
    subscriptionStatus = 'Your payment failed.<br>Please try again later';
  } else if (data.subscriptionAttempt == 'payment_cancelled') {
    subscriptionStatus = 'You have cancelled your payment';
  }

  //let user_url = "/products/redirect-product-list?step=product_list&categoryPath="+data.user_categoryPath; 
  let user_url = "/products/redirect-product-list?step=product_list"; 


  // const setProductEditor = async (event) => {
  //   event.preventDefault();
  //   location.href = '/products#step=product_list&categoryPath=newspaper';
  // }

  return (    
    <div className="df justify-content-center my3">
      <div className="w100">
        <div className="tc">
          <h2 dangerouslySetInnerHTML={{__html: subscriptionStatus}}></h2>
          <h2>What would you like to do?</h2>
          <div className="my3">
            <a href={user_url}>
                <button type="submit" className="btn green btn-home-page" style={{width:'450px'}}>Start new project</button>
            </a>            
            <div className="my1 kingsthings margin-bottom" ></div>            
            <a href={`${data.edit_list > 0? "/projects" : "#"}`} data-tip data-for='edit_list' >
                <button type="submit"  className={`${data.edit_list > 0? "btn teal btn-home-page" : "btn grey btn-home-page "}`} style={{width:'450px'}}>Edit project</button>
            </a>
            {data.edit_list <= 0?
              <>
              <ReactTooltip id='edit_list' type='warning'>
                <span>You don't currently have any projects underway</span>
              </ReactTooltip></>:<></>
            }

            <div className="my1 kingsthings margin-bottom"></div>           
            <a href={`${data.completed_list > 0? "/projects/completed" : "#"}`} data-tip data-for='completed_list'>
                <button type="submit" className={`${data.completed_list > 0? "btn teal btn-home-page" : "btn grey btn-home-page "}`} style={{width:'450px'}}>View completed projects</button>
            </a>
            {data.completed_list <= 0?
              <>
              <ReactTooltip id='completed_list' type='warning'>
                <span>You have no completed projects.</span>
              </ReactTooltip></>:<></>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
