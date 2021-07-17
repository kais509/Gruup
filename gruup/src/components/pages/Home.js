import React from 'react';
import "../../App.css";
import "./Home.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';

// import HeroSection from "../HeroSection";


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
            <Roll left>
                <Button className="hello" variant="contained" color="primary" href="/signup">
                    Sign Up
                </Button>
            </Roll>
            <img class="image-logo" src="pwvs6atMNMdw.gif" alt="hi"></img>

            
            <div class="hellos">
                <Zoom bottom>
                <h1>What is Gruup?</h1>
                <Button className = "hi" variant="contained" color="primary" href="/howitworks">
                    Learn More
                </Button>
                </Zoom>
            </div> 
             <LightSpeed bottom cascade> 
           <div className = "quote">
         
               <p>"One of the most valuable things we can do to heal one another is listen to each other's stories." <br></br>-Rebbeca Falls</p>
               
           </div></LightSpeed>
            





        </div>



    );
}

export default Home;