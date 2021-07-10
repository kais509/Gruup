import React from 'react';
import "../../App.css";
import './Signup.css';


function Signup () {
    return (
        <div style={{ color: '#7c1c1c',backgroundColor: '#7c1c1c', height: 140 }}> 
        
            <form >
                <h1 className = "Signup"> Sign up </h1>
                <label className = "emailAddress"> Email Address</label> <input type = "text"  className = "enterValue" placeholder = "Email Address"/><br />
                <label  className = "password"> Password</label> <input type = "text"  className = "enterValue" placeholder = "Password"/> <br />  
               <input  className = "submitButton" type = "submit" value="Submit"/>
            </form>


        </div>


    )
    
        


}

export default Signup
