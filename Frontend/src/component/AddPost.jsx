import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const base_url = "http://localhost:9090";

export function AddPost() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const formhandle = (event) => {
    event.preventDefault();

    // Check if there are any validation errors before posting data
    if (
      validationErrors.firstName ||
      validationErrors.lastName ||
      validationErrors.emailId
    ) {
      return;
    }

    postDataOnServer(user);
  };

  const postDataOnServer = (data) => {
    axios
      .post(`${base_url}/api/employees`, data)
      .then(
        (response) => {
          console.log(response.data);
          console.log("data uploaded successfully");
          navigate("/showall");
        },
        (error) => {
          console.log(error);
          console.log("server is down");
        }
      );
  };

  return (
    <>
      <div className="jumbotron">
        <form onSubmit={formhandle} className="needs-validation">
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              id="firstName"
              className={`form-control ${
                validationErrors.firstName ? "is-invalid" : ""
              }`}
              required
              onChange={(e) => {
                const value = e.target.value;
                setUser({ ...user, firstName: value });

                // Validate the first name
                if (value.length < 5) {
                  setValidationErrors({
                    ...validationErrors,
                    firstName: "First name must be at least 5 characters",
                  });
                } else {
                  setValidationErrors({
                    ...validationErrors,
                    firstName: "",
                  });
                }
              }}
            />
            <div className="invalid-feedback">
              <p>{validationErrors.firstName}</p>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className={`form-control ${
                validationErrors.lastName ? "is-invalid" : ""
              }`}
              required
              onChange={(e) => {
                const value = e.target.value;
                setUser({ ...user, lastName: value });

                // Validate the last name
                if (value.length < 5) {
                  setValidationErrors({
                    ...validationErrors,
                    lastName: "Last name must be at least 5 characters",
                  });
                } else {
                  setValidationErrors({
                    ...validationErrors,
                    lastName: "",
                  });
                }
              }}
            />
            <div className="invalid-feedback">
              <p>{validationErrors.lastName}</p>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className={`form-control ${
                validationErrors.emailId ? "is-invalid" : ""
              }`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              onChange={(e) => {
                const value = e.target.value;
                setUser({ ...user, emailId: value });

                // Validate the email
                if (!value.includes("@")) {
                  setValidationErrors({
                    ...validationErrors,
                    emailId: "Invalid email address",
                  });
                } else {
                  setValidationErrors({
                    ...validationErrors,
                    emailId: "",
                  });
                }
              }}
            />
            <div className="invalid-feedback">
              <p>{validationErrors.emailId}</p>
            </div>
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={
                validationErrors.firstName ||
                validationErrors.lastName ||
                validationErrors.emailId
              }
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddPost;
