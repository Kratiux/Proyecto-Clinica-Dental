import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";


const MaybeShowNavBar = ({ children }) =>{
    const location = useLocation();
    const [showNavBar, setShowNavBar] = useState(false)

    useEffect(() =>{

        console.log('this is location: ', location)
        if (location.pathname === '/Admin/Dashboard' || location.pathname === '/SignIn/signIn' || location.pathname === '/SignUp/signUp' || location.pathname === '/Admin/Users' || location.pathname === '/Admin/FilePatient' || location.pathname === '/Admin/UserCreate' || location.pathname === '/Admin/FileCreate' || location.pathname === '/Admin/UpdateFile/:id' || location.pathname === '/Admin/UpdateUser/:id'|| location.pathname === '/Scheduler/scheduler'){
            setShowNavBar(false)

        }else {
            setShowNavBar(true)
        }


    }, [location])

    return (

        <div>{showNavBar && children}</div>

    )

}

export default MaybeShowNavBar