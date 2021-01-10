import './assets/css/style.css';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import Users from './components/Users.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Router>
       <div>
         <Route exact path ="/" component ={Home} />
         <Route exact path ="/About" component ={About} />
         <Route exact path ="/Contact" component ={Contact} />
         <Route exact path ="/Users" component ={Users} />

       </div>
       </Router>
    </div>
  );
}

export default App;
