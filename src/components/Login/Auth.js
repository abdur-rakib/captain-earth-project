import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Signin from "./Signin";
import Registration from './Registration'
import maskot from "../../styles/img/maskot.png";
import "./Auth.css";

function Auth() {
    const [state, setState] = useState(false);
    const changeState = () => { console.log("CHange"); setState(!state);}

    return (
        <>
        <Navigation />
        <div className="auth">
            <div className="auth_image login__container__logoBox">
                <img src={maskot} height="70%" alt="loginimage" />
            </div>

            <div className="auth_content">
                {
                    !state
                    ? <Signin stateChange={changeState}/>
                    : <Registration stateChange={changeState}/>
                }
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Auth
