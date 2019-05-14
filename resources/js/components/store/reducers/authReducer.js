const initState = {
    token: ""
};

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "SIGNUP":
            return {
                ...state,
                token: action.token
            };
        case "SIGNUP_ERROR":
            console.log(action.err);
            return state;
        case "LOGIN":
            return {
                ...state,
                token: action.token
            };
        case "LOGIN_ERROR":
            console.log(action.err);
            return state;
        case "LOGOUT":
            window.localStorage.removeItem("token");
            return {
                ...state,
                token: ""
            };
        case "LOGOUT_ERROR":
            console.log(action.err);
            return state;

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };
        default:
            return state;
    }
};
