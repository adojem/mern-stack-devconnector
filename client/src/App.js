import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';

import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import store from './store';

//  Components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

// CSS
import './App.css';

// Check for token
if (localStorage.jwtToken) {
   setAuthToken(localStorage.jwtToken);
   const decoded = jwtDecode(localStorage.jwtToken);
   // Set user and isAuthenticated
   store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
   render() {
      return (
         <Provider store={store}>
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
        </Provider>
      );
   }
}

export default App;
