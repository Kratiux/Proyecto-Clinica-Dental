import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";


const MaybeShowNavBar = ({ children }) =>{
    const location = useLocation();
    const [showNavBar, setShowNavBar] = useState(false)

    useEffect(() =>{

        console.log('this is location: ', location)
        if (location.pathname === '/Admin/Dashboard' || location.pathname === '/SignIn/signIn' || location.pathname === '/SignUp/signUp'){
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