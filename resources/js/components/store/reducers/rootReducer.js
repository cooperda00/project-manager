//Modules
import { combineReducers } from "redux";
//Reducers
import { projectReducer } from "./projectReducer";
import { taskReducer } from "./taskReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
    project: projectReducer,
    task: taskReducer,
    auth: authReducer
});

export default rootReducer;
