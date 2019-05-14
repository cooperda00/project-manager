const initState = {
    tasks: []
};

export const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            console.log(action.message);
            return state;
        case "ADD_TASK_ERROR":
            console.log("There was an error adding a task", action.err);
            return state;
        //------------------------------------------------------------
        case "GET_ALL_TASKS":
            console.log(action.message);
            return {
                ...state,
                tasks: action.payload
            };
        case "GET_ALL_TASKS_ERROR":
            console.log("There was an error fetching tasks", action.err);
            return state;
        //------------------------------------------------------------
        case "DELETE_TASK":
            console.log(action.message);
            return state;
        case "DELETE_TASK_ERROR":
            console.log("There was an error deleting a task", action.err);
            return state;
        //------------------------------------------------------------
        case "MARK_AS_COMPLETE":
            console.log(action.message);
            return state;
        case "MARK_AS_COMPLETE_ERROR":
            console.log("There was an error completing task", action.err);
            return state;
        default:
            return state;
    }
};
