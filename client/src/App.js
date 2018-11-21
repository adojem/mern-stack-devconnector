import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

class App extends Component {
   render() {
      return (
         <Router>
            <div className="App">
               <Navbar />
               <Route path="/" exact component={Landing} />
               <div className="container">
                  <Route path="/register" component={Register} />
                  <Route path="/login" component={Login} />
               </div>
               <Footer />
            </div>
         </Router>
      );
   }
}

export default App;