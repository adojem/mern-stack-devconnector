import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';

import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

//  Components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import AddExperience from './components/add-credentials/AddExperience';
import AddEducation from './components/add-credentials/AddEducation';
import Profiles from './components/profiles/Profiles';

// CSS
import './App.css';

// Check for token
if (localStorage.jwtToken) {
   setAuthToken(localStorage.jwtToken);
   const decoded = jwtDecode(localStorage.jwtToken);
   // Set user and isAuthenticated
   store.dispatch(setCurrentUser(decoded));

   // Check for expired token
   const currentTime = Date.now() / 1000;
   if (decoded.exp < currentTime) {
      store.dispatch(logoutUser());
      // TODO Clear current profile
      store.dispatch(clearCurrentProfile());
      // TODO to login
      window.location.href = './login';
   }
}

const App = () => (
   <Provider store={store}>
      <Router>
         <div className="App">
            <Navbar />
            <Route path="/" exact component={Landing} />
            <div className="container">
               <Route path="/register" component={Register} />
               <Route path="/login" component={Login} />
               <Route path="/profiles" component={Profiles} />
               <Switch>
                  <PrivateRoute path="/dashboard" component={Dashboard} />
               </Switch>
               <Switch>
                  <PrivateRoute path="/create-profile" component={CreateProfile} />
               </Switch>
               <Switch>
                  <PrivateRoute path="/edit-profile" component={EditProfile} />
               </Switch>
               <Switch>
                  <PrivateRoute path="/add-experience" component={AddExperience} />
               </Switch>
               <Switch>
                  <PrivateRoute path="/add-education" component={AddEducation} />
               </Switch>
            </div>
            <Footer />
         </div>
      </Router>
   </Provider>
);

export default App;
