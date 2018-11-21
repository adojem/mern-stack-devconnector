import React, { Component } from 'react';

export class Navbar extends Component {
   render() {
      return (
         <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
               <div className="container">
                  <a href="#" className="navbar-brand">
                     DevConnector
                  </a>
                  <button
                     className="navbar-toggler"
                     type="button"
                     data-toggle="collapse"
                     data-target="#mobile-nav"
                  >
                     <span className="navbar-toggler-icon" />
                  </button>

                  <div className="collapse navbar-collapse" id="mobile-nav">
                     <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                           <a href="#" className="nav-link">
                              Developer
                           </a>
                        </li>
                     </ul>

                     <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                           <a href="#" className="nav-link">
                              Sign Up
                           </a>
                        </li>
                        <li className="nav-item">
                           <a href="#" className="nav-link">
                              Login
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </div>
      );
   }
}

export default Navbar;
