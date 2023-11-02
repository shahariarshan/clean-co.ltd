import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user,isLoading }=useAuth()
    if(isLoading){
        return <progress className="progress my-28 mx-auto "></progress>
    }


    if(!isLoading && !user?.email){
        
        return <Navigate to={'/login'}></Navigate>
    }
   return children
};

export default PrivateRoute;