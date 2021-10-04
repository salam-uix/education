import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import ContactUs from './ContactUs/ContactUs';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
            
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
