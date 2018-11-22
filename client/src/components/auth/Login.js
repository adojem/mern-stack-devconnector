import React, { Component } from 'react';

export class Login extends Component {
   constructor() {
      super();

      this.state = {
         email: '',
         password: '',
         errors: {}
      };
   }

   onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
   };

   onSubmit = e => {
      e.preventDefault();

      const { email, password } = this.state;
      const newUser = { email, password };
   };

   render() {
      const { email, password } = this.state;

      return (
         <div className="login">
            <div className="container">
               <div className="row">
                  <div className="col-md-8 m-auto">
                     <h1 className="display-4 text-center">Log In</h1>
                     <p className="lead text-center">
                        Sign in to you DevConector account
                     </p>
                     <form noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                           <input
                              type="email"
                              name="email"
                              className="form-control form-control-lg"
                              value={email}
                              onChange={this.onChange}
                           />
                        </div>
                        <div className="form-group">
                           <input
                              type="password"
                              name="password"
                              className="form-control form-control-lg"
                              value={password}
                              onChange={this.onChange}
                           />
                        </div>
                        <input
                           type="submit"
                           className="btn btn-info btn-block mt-4"
                        />
                     </form>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Login;
