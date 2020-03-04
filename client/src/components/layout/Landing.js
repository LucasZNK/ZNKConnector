import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const Landing = ({ auth: { isAuthenticated, loading } }) => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          {!loading && !isAuthenticated ? (
            <Fragment>
              <div className="buttons">
                <Link to="/register" className="btn btn-primary">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-light">
                  Login
                </Link>
              </div>
            </Fragment>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

Landing.propType = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Landing);
