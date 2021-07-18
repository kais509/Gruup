import React from 'react';
import "../../App.css";
import './Faq.css';


function Faq () {
    return (

        <div>
            <h1 className = "faqheader">FAQ</h1>
            <p className = "question" >How am I paired to a support group that suites my needs?</p>
            <p className = "answer" >Gruup offers a two minute mental health survey who's results are used to pair you to a suppprt group that would benefit you.</p>
            <p className = "question">How do I book my sessions?</p>
            <p className = "answer">We allow seemless transactions through paypal that allows you to stay on our website and browse between numerous support groups spread between various websites.</p>
            <p className = "question">What is the cancellation policy?</p>
            <p className = "answer">We allow for cancellations as long as they are made 24 hours before the appointment. Any cancellations made within the 24 hour period are charged fully.</p>
            <p className = "question">How is my data from the mental health survey used?</p>
            <p className = "answer">Data from the survey is strictly used for matching you to various support groups and is deleted immediatly after the computer has found matches for you.</p>
        </div>


  


    )
    
        


}

export default Faq