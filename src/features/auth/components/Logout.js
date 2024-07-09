import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser, signOutUSerAsync } from "../authSlice";
import { Navigate } from "react-router-dom";



 function Logout(){
    const dispatch = useDispatch();

    const user = useSelector(selectLoggedInUser)

        useEffect(()=>{

            dispatch(signOutUSerAsync(user.id))

        })

        return (

            <>

            {!user && <Navigate to='/login' replace={true}></Navigate>}
           
            </>
        )


}


export default Logout;