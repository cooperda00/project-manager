import axios from "axios";

export const signup = formData => {
    return dispatch => {
        axios
            .post("/api/register", formData)
            .then(res => {
                const token = res.data.success.token;

                dispatch({
                    type: "SIGNUP",
                    token
                });

                return token;
            })
            .then(token => {
                window.localStorage.setItem("token", token);
            })
            .catch(err => {
                dispatch({
                    type: "SIGNUP_ERROR",
                    err
                });
            });
    };
};

export const login = formData => {
    return dispatch => {
        axios
            .post("/api/login", formData)
            .then(res => {
                const token = res.data.success.token;

                dispatch({
                    type: "LOGIN",
                    token
                });

                return token;
            })
            .then(token => {
                window.localStorage.setItem("token", token);
            })
            .catch(err => {
                dispatch({
                    type: "LOGIN_ERROR",
                    err
                });
            });
    };
};

export const grabToken = () => {
    return dispatch => {
        const token = window.localStorage.getItem("token");

        dispatch({
            type: "SET_TOKEN",
            token
        });
    };
};

export const logout = () => {
    return dispatch => {
        const token = window.localStorage.getItem("token");

        axios({
            url: "/api/logout",
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`,
                accept: "application/json"
            }
        })
            .then(res => {
                dispatch({
                    type: "LOGOUT"
                });
            })
            .catch(err => {
                dispatch({
                    type: "LOGOUT_ERROR",
                    err
                });
            });
    };
};
