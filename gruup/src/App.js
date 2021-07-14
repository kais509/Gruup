import "./App.css";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Form from "./components/pages/Form";
import SessionsAvail from "./components/pages/SessionsAvail";




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
         {/* <Route path = '/dashboard' exact component = {Dashboard} /> */}
       </Switch>

   </Router>
   <header className="App-header"> </header>
  </div>
   
  );
}
