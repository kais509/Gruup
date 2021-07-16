import "./App.css";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Form from "./components/pages/Form";
import SessionsAvail from "./components/pages/SessionsAvail";
import Howitworks from "./components/pages/Howitworks";
import faq from "./components/pages/Faq";
import login from "./components/pages/Login"



export default function App() {
  return (
    <div className="App">
      
  
   <Router>   
       <Navbar />
       <Switch>
         <Route path = '/' exact component = {Home} />
         <Route path = '/signup' exact component = {Signup} />
         <Route path = '/form' exact component = {Form} />
         <Route path = '/sessionsavailable' exact component = {SessionsAvail} />
         <Route path = '/howitworks' exact component = {Howitworks} />
         <Route path = '/faq' exact component = {faq} />
         <Route path = '/login' exact component = {login}/>
       </Switch>

   </Router>
   <header className="App-header"> </header>
  </div>
   
  );
}
