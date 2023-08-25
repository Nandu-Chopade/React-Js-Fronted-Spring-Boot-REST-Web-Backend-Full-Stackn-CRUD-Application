import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify'; 

function AppFormValidation() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validate({ ...formValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
   
    if(formValues.username &&  formValues.email && formValues.password){
        toast.success("succussfully login")
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  const handleReset = () => {
    setFormValues(initialValues);
    setFormErrors({});
    setIsChecked(true);
  };

  return (
    <>
      <ToastContainer/>
    <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">  <form onSubmit={handleSubmit} className="needs-validation  my-4">
  <div className="mb-3">
    <label htmlFor="form2Example2" className="form-label">
      Username
    </label>
    <input
      type="text"
      className={`form-control ${formErrors.username ? 'is-invalid' : ''}`}
      id="form2Example2"
      name="username"
      value={formValues.username}
      onChange={handleChange}
    />
    <div className="invalid-feedback">{formErrors.username}</div>
  </div>

  <div className="mb-3">
    <label htmlFor="form2Example1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
      id="form2Example1"
      name="email"
      value={formValues.email}
      onChange={handleChange}
    />
    <div className="invalid-feedback">{formErrors.email}</div>
  </div>

  <div className="mb-3">
    <label htmlFor="form2Example3" className="form-label">
      Password
    </label>
    <input
      type="password"
      className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
      id="form2Example3"
      name="password"
      value={formValues.password}
      onChange={handleChange}
    />
    <div className="invalid-feedback">{formErrors.password}</div>
  </div>

  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="form2Example31"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label className="form-check-label" htmlFor="form2Example31">
          Remember me
        </label>
      </div>
    </div>

    <div className="col">
      <a href="#!" className="text-decoration-none">
        Forgot password?
      </a>
    </div>
  </div>

  <button type="submit" className="btn btn-primary btn-block mb-4">
    Sign in
  </button>
  <button type="reset" onClick={handleReset} className="btn btn-primary btn-block mb-4 mx-2">
    Reset
  </button>

  <div className="text-center">
    <p className="mb-2">
      Not a member? <a href="#!" className="text-decoration-none">Register</a>
    </p>
    <p className="mb-2">or sign up with:</p>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
     </form></div>
        <div className="col-md-2"></div>
    </div>

    </>
  );
}

export default AppFormValidation;
