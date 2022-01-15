import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from "react-router-dom";
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';



const Register = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  // const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });


  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      props.setAlert("Passwords do not match", 'danger');
      return;
    } else {
      props.register({ name, email, password });
      console.log("SUCCESS");
      // const newUser = {
      //   name,
      //   email,
      //   password
    };
    // try {
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   };

    //   const body = JSON.stringify(newUser);
    //   console.log(body);

    //   const res = await axios.post('api/users', body, config);
    //   console.log(res.data);

    // } catch (err) {
    //   console.log(err.response);
    // }
  };

  // Redirect if logged in
  if (props.Authenticated) {
    return <Navigate to="/dashboard" />;
  }


  // console.log(formData);


  return (
    <React.Fragment>
      {/* <button onClick={() => props.setAlert("Passwords do not match", 'danger')}>Check check reducer</button> */}
      {/* <button onClick={() => props.removeAlert()}>remove</button> */}
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user" /> Create Your Account
        </p>

        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onChange(e)}
            // required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onChange(e)}
            // required
            />
            <small className="form-text">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
            // minLength="6"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={e => onChange(e)}
            // minLength="6"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>

        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
    </React.Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  Authenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  Authenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
