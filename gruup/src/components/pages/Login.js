import React from 'react';
import "../../App.css";
import './Signup.css';
import {useHistory} from "react-router-dom";


function Login() {
    const history = useHistory();
    const navigateTo = () => history.push('/form');


    return (

        
            <form >
                <h1 className = "signUp"> Login</h1>
                <label className = "emailAddress"> Email Address</label> <input type = "text"  className = "enterValue" /><br />
                <label  className = "password"> Password</label> <input type = "text"  className = "enterValue" /> <br />  
               <input  className = "submitButton" onClick={navigateTo} type = "submit" value="Continue"/>
            </form>


  


    )
    
        


}

export default Login