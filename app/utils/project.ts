import supabase from "../utils/supabase";

const Project = { 
    getLockedProjects : async function (customerId: string) {
        try {
            const response = await supabase
            .from("locked_projects")
            .select("*")
            .match({ customer_id: customerId });

            return response;
        } catch (err) {
            console.error(err);
            return null;
        }
    },

    getLockedProject : async function (customerId: string, projectId: string, sessionId: string) {
        try {
            const response = await supabase
            .from("locked_projects")
            .select("*")
            .match({ customer_id: customerId, project_id: projectId, session_id: sessionId });

            return response;
        } catch (err) {
            console.error(err);
            return null;
        }
    },

    setProjectLocked : async function (customerId: string, projectId: string, sessionId: string) {
        try {   
            const response = await supabase
            .from('locked_projects')
            .insert([
                { customer_id: customerId, project_id: projectId, session_id: sessionId },
            ]);

            return response;
        } catch (err) {
            console.error(err);
            return null;
        }
    },

    deleteLockedProjects : async function (sessionId: string) {
        try {   
            const response = await supabase
            .from('locked_projects')
            .delete()
            .eq('session_id', sessionId);

            return response;
        } catch (err) {
            console.error(err);
            return null;
        }
    }
};

export default Project;