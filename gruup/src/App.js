import "./App.css";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
// import Dashboard from "./components/pages/Dashboard";
// import Signup from "./components/pages/Signup"

export default function App() {
  return (
  <>
   <Router>   
       <Navbar />
       <Switch>
         <Route path = '/' exact component = {Home} />
         {/* <Route path = '/signup' exact component = {Signup} />
         <Route path = '/dashboard' exact component = {Dashboard} /> */}
       </Switch>

   </Router>
     

   </>
  );
}
