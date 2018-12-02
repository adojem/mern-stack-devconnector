import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileGithub extends Component {
   constructor(props) {
      super(props);

      this.state = {
         count: 5,
         sort: 'created: asc',
         repos: [],
      };

      this.abortCtrl = new AbortController();
   }

   componentDidMount = () => {
      const { username } = this.props;
      const { count, sort } = this.state;
      const { signal } = this.abortCtrl;

      fetch(`/api/profile/github/${username}/${count}/${sort}`, { signal })
         .then(res => res.json())
         .then((data) => {
            this.setState({ repos: data });
         })
         .catch(err => console.log(err));
   };

   componentWillUnmount = () => {
      this.abortCtrl.abort();
   };

   render() {
      const { repos } = this.state;

      const repoItems = repos.map(repo => (
         <div className="card card-body mb-2" key={repo.id}>
            <div className="row">
               <div className="col-md-6">
                  <h3 className="h4">
                     <a
                        href={repo.html_url}
                        className="text-info"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        {repo.name}
                     </a>
                  </h3>
                  <p>{repo.description}</p>
               </div>
               <div className="col-md-6">
                  <span className="badge badge-info mr-1">{`Stars: ${repo.stargazers_count}`}</span>
                  <span className="badge badge-info mr-1">
                     {`Watchers: ${repo.watchers_count}`}
                  </span>
                  <span className="badge badge-success">{`Forks: ${repo.forks_count}`}</span>
               </div>
            </div>
         </div>
      ));

      return (
         <div>
            <hr />
            <h2 className="h3 mb-4">Latest Github Repos</h2>
            {repoItems}
         </div>
      );
   }
}

ProfileGithub.propTypes = {
   username: PropTypes.string.isRequired,
};

export default ProfileGithub;
