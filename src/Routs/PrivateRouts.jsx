import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import { AuthContext } from "../Providers/AuthProviders";



const PrivateRouts = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}
export default PrivateRouts;