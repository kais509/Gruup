import React from 'react';
import "../../App.css";
import './Signup.css';
import {Link, useHistory} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Signup () {
    const history = useHistory();
    const navigateTo = () => history.push('/form');


    return (
        <div class = "hi"> 
            <form>
                <div className = "form-container">
                <h1 className = "signUp"> Sign Up </h1>
                <div className="textfil">    
                <TextField  id="standard-basic" label="Email Address" />
                </div>
                <div class="textfil"> 
                <TextField  id="standard-basic"  type="password" autoComplete="current-password" label="Password" />
                </div>
                <div class="textfil"> 
                <TextField  id="standard-basic"  type="password" autoComplete="current-password" label="Re-enter Password" /> 
                </div>
                <a href = "/login">Already have an account?</a>
                <Button className="name" onClick={navigateTo} variant="outlined">Sign Up</Button>
                </div>
            </form>
            </div>
    )
    
        


}

export default Signup
