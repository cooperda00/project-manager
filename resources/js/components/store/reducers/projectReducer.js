const initState = {
    projects: [],
    selectedProject: {},
    createMessage: "",
    updateMessage: ""
};

export const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_ALL_PROJECTS":
            return {
                ...state,
                projects: action.projects
            };
        case "GET_ALL_PROJECTS_ERROR":
            console.log("There was an error fetching projects", action.err);
            return state;
        //-------------------------------------------------------------------------
        case "GET_INDIVIDUAL_PROJECT":
            return {
                ...state,
                selectedProject: action.project
            };
        case "GET_INDIVIDUAL_PROJECT_ERROR":
            console.log("There was an error fetching project", action.err);
            return state;
        //-------------------------------------------------------------------------
        case "CLEAR_INDIVIDUAL_PROJECT":
            return {
                ...state,
                selectedProject: {}
            };
        //-------------------------------------------------------------------------
        case "CREATE_NEW_PROJECT":
            return {
                ...state,
                createMessage: action.message
            };
        case "CREATE_NEW_PROJECT_ERROR":
            console.log("There was an error creating project", action.err);
            return state;
        //-------------------------------------------------------------------------
        case "CLEAR_CREATE_MESSAGE":
            return {
                ...state,
                createMessage: ""
            };
        //-------------------------------------------------------------------------
        case "DELETE_PROJECT":
            return {
                ...state,
                deleteMessage: action.message
            };
        case "DELETE_PROJECT_ERROR":
            console.log("There was an error deleting project", action.err);
            return state;
        //-------------------------------------------------------------------------
        case "UPDATE_PROJECT":
            console.log(action.payload);
            //Update Redux state as well to reflect changes on db
            const updatedProject = state.selectedProject;
            updatedProject.name = action.payload.name;
            updatedProject.description = action.payload.description;
            updatedProject.is_completed = action.payload.is_complete;

            return {
                ...state,
                selectedProject: { ...updatedProject },
                updateMessage: action.message
            };
        case "UPDATE_PROJECT_ERROR":
            console.log("There was an error updating project", action.err);
            return state;
        //-------------------------------------------------------------------------
        default:
            return state;
    }
};
