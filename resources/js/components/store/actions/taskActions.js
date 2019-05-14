export const getAllTasks = () => {
    return dispatch => {
        axios
            .get("/api/tasks")
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
        axios
            .post(`/api/tasks`, payload)
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
        axios
            .put(`/api/tasks/${id}`)
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
        axios
            .delete(`/api/tasks/${id}`)
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
