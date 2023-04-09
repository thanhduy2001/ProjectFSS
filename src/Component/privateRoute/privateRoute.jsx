import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
    const state = useSelector(state => state);
    const isLogined = state && state.auth && state.auth.isLogined;
    return isLogined ? children : <Navigate to={'/'} />

}
export default PrivateRoute