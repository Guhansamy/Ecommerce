 import { useState } from "react";
import { Outlet } from "react-router-dom";
 
 const Profile = () => {
    return (
        <>

            <h1> hello guys</h1>
            <Outlet />

        </>
        
    )
 }

 export default Profile;