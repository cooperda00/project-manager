export const getAllTasks = () => {
    return dispatch => {
        const token = window.localStorage.getItem("token");

        axios({
            url: "/api/tasks",
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
                accept: "application/json"
            }
        })
            .then(res => {
                dispatch({
                    type: "GET_ALL_TASKS",
                    payload: res.data
                });
            })
            .catch(err => {
                dispatch({
                    type: "GET_ALL_TASKS_ERROR",
                    err
                });
            });
    };
};

export const addTask = payload => {
    return dispatch => {
        const token = window.localStorage.getItem("token");

        axios({
            url: "/api/tasks",
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`,
                accept: "application/json"
            },
            data: payload
        })
            .then(res => {
                dispatch({
                    type: "ADD_TASK",
                    message: res.data
                });
            })
            .catch(err => {
                dispatch({
                    type: "ADD_TASK_ERROR",
                    err
                });
            });
    };
};

export const markAsComplete = id => {
    return dispatch => {
        const token = window.localStorage.getItem("token");

        axios({
            url: `/api/tasks/${id}`,
            method: "PUT",
            headers: {
                authorization: `Bearer ${token}`,
                accept: "application/json"
            }
        })
            .then(res => {
                dispatch({
                    type: "MARK_AS_COMPLETE",
                    message: res.data
                });
            })
            .catch(err => {
                dispatch({
                    type: "MARK_AS_COMPLETE_ERROR",
                    err
                });
            });
    };
};

export const deleteTask = id => {
    return dispatch => {
        const token = window.localStorage.getItem("token");

        axios({
            url: `/api/tasks/${id}`,
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`,
                accept: "application/json"
            }
        })
            .then(res => {
                dispatch({
                    type: "DELETE_TASK",
                    message: res.data
                });
            })
            .catch(err => {
                dispatch({
                    type: "DELETE_TASK_ERROR",
                    err
                });
            });
    };
};
