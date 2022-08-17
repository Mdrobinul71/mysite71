import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './componants/Nabbar/Nabbar';
import {Switch,Route} from 'react-router-dom';
import Home from './componants/Home/Home';
import About from './componants/About/About';
import Services from './componants/Services/Services';
import Signup from './componants/Signup';
import Login from './componants/Login';
import Info from './componants/Info';
import Contact from './componants/Contact';
import Logout from './componants/Logout';
import Error from './componants/Error';
import Footer from './componants/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Services} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/info" component={Info} />
      <Route exact path="/contact" component={Contact} />
      <Route exact patch="/logout" component={Logout} />
      <Route component={Error} />
      </Switch>
      <Footer />

    </div>
  )
}

export default App