import React from 'react';
import "../../App.css";
import './Signup.css';
import {useHistory} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Login() {
    const history = useHistory();
    const navigateTo = () => history.push('/form');


    return (

        
        <div class = "hi"> 
        <form>
            <div class = "his">
            <h1 className = "signUp"> Log In </h1>
            <div className="textfil">    
            <TextField  id="standard-basic" label="Email Address" />
            </div>
            <div class="textfil"> 
            <TextField  id="standard-basic"  type="password" autoComplete="current-password" label="Password" />
            </div>
            <a href = "/login">Don't have an account yet?</a>
            <Button className="name" onClick={navigateTo} variant="outlined">Log In</Button>
            </div>
        </form>
        </div>

  


    )
    
        


}

export default Login