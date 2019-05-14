import axios from "axios";

export const getAllProjects = () => {
    return dispatch => {
        const token = window.localStorage.getItem("token");

        axios({
            url: "/api/projects",
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
                accept: "application/json"
            }
        })
            .then(res => {
                dispatch({
                    type: "GET_ALL_PROJECTS",
                    projects: res.data
                });
            })
            .catch(err => {
                dispatch({
                    type: "GET_ALL_PROJECTS_ERROR",
                    err
                });
            });
    };
};

export const getIndividualProject = id => {
    return dispatch => {
        const token = window.localStorage.getItem("token");

        axios({
            url: `/api/projects/${id}`,
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
                accept: "application/json"
            }
        })
            .then(res => {
                dispatch({
                    type: "GET_INDIVIDUAL_PROJECT",
                    project: res.data
                });
            })
            .catch(err => {
                dispatch({
                    type: "GET_INDIVIDUAL_PROJECT_ERROR",
                    err
                });
            });
    };
};

export const clearIndividualProject = () => {
    return dispatch => {
        dispatch({
            type: "CLEAR_INDIVIDUAL_PROJECT"
        });
    };
};

export const createNewProject = payload => {
    return dispatch => {
        const project = {
            name: payload.name,
            description: payload.description
        };

        const token = window.localStorage.getItem("token");

        axios({
            url: "/api/projects",
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`,
                accept: "application/json"
            },
            data: project
        })
            .then(res => {
                dispatch({
                    type: "CREATE_NEW_PROJECT",
                    message: res.data
                });
            })
            .catch(err => {
                dispatch({
                    type: "CREATE_NEW_PROJECT_ERROR",
                    err
                });
            });
    };
};

export const clearCreateMessage = () => {
    return dispatch => {
        dispatch({
            type: "CLEAR_CREATE_MESSAGE"
        });
    };
};

export const deleteProject = id => {
    return dispatch => {
        const token = window.localStorage.getItem("token");

        axios({
            url: `/api/projects/${id}`,
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`,
                accept: "application/json"
            }
        })
            .then(res => {
                dispatch({
                    type: "DELETE_PROJECT",
                    message: res.data
                });
            })
            .catch(err => {
                dispatch({
                    type: "DELETE_PROJECT_ERROR",
                    err
                });
            });
    };
};

export const updateProject = (id, payload) => {
    return dispatch => {
        const token = window.localStorage.getItem("token");

        axios({
            url: `/api/projects/${id}`,
            method: "PUT",
            headers: {
                authorization: `Bearer ${token}`,
                accept: "application/json"
            },
            data: payload
        })
            .then(res => {
                dispatch({
                    type: "UPDATE_PROJECT",
                    message: res.data,
                    payload
                });
            })
            .catch(err => {
                dispatch({
                    type: "UPDATE_PROJECT_ERROR",
                    err
                });
            });
    };
};
