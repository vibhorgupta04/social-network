import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Landing = ({ auth: { isAuthenticated, loading } }) => {
  return (
    <div>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Connector</h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help from
              other developers
            </p>
            <div className="buttons">
              {!loading && !isAuthenticated &&
                <React.Fragment>
                  <Link to="register" className="btn btn-primary">Sign Up</Link>
                  <Link to="login" className="btn btn-light">Login</Link>
                </React.Fragment>
              }
              {/* <Link to="register" className="btn btn-primary">Sign Up</Link>
              <Link to="login" className="btn btn-light">Login</Link> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
