import React from 'react';
import "../../App.css";
import "./Home.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//import HeroSection from "../HeroSection";


function Home() {
    return (




        <div class="container"> <h1> Counselling doesn't have to be</h1>
            <div class="word w1">Complicated.</div>
            <div class="word w2">Expensive.</div>
            <div class="word w3">Isolating.</div>
            <div class="word w4">Difficult.</div>
            <div class="word w5">A luxury.</div>

            <p>
                Gruup connects you to counselling groups helping<br></br> you with X, Y, Z.  You don’t have to be alone.<br></br> Find your selected community.
            </p>
           
                <Button className="signup" variant="contained" color="primary" href="/howitworks">
                    Find out more
                </Button>
         
            <img class="image-logo" src="pwvs6atMNMdw.gif" alt="hi"></img>

            <div class="images">
                <img className ="image1" src="money.jpeg" />
                <img className ="image2" src="friends.jpeg" />
                <img className ="image3" src="friends.jpeg" />
            </div>
            <p className= "imagedesc1">Feeling goof shouldn't hurt your wallet. <br></br>Significantly cheaper than 1-1 online and<br></br> in-person therapy.</p>
            <p className = "imagedesc2">Find a community.</p>
            <p className = "imagedesc3">Easy process. See here.</p>

            { <div class="howitworks">
              
                    <h1>Any More Questions?</h1>
                    <Button className="howitworksbutton" variant="contained" color="primary" href="/faq">
                        Check out FAQ
                    </Button>
        
            </div> }


        </div>



    );
}

export default Home;