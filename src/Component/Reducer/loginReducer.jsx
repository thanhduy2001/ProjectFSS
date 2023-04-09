const initialState = {
    isLogined: false
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLogined: true
            }
        case "LOGOUT":
            return {
                ...state,
                isLogined: false
            }
        default:
            return state;
    }
}

export default LoginReducer