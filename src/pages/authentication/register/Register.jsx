import React, { useState } from "react";

const Register = () => {
  // States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error States
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Handle states
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Handle Error States
  var validate = () => {
    var isValid = true;
    if (firstName.trim() === "") {
      setFirstNameError("Please enter first name.");
      isValid = false;
    }
    if (lastName.trim() === "") {
      setLastNameError("Please enter last name.");
      isValid = false;
    }
    if (email.trim() === "") {
      setEmailError("Please enter email.");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Please enter password.");
      isValid = false;
    }
    if (confirmPassword.trim() === "") {
      setConfirmPasswordError("Please enter confirmed password.");
      isValid = false;
    }
    return isValid;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, lastName);
    var isValid = validate();
    if (!isValid) {
      return;
    }
  };

  return (
    <>
      <div>
        <h1 className="m-3">Create an account</h1>
        <form className="w-25 m-3" action="" method="post">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name=""
            id=""
            onChange={handleFirstName}
            className="form-control"
            placeholder="Enter First Name"
          />
          {firstNameError && (
            <small className="text text-danger">{firstNameError}</small>
          )}
          <br />
          <label className="mt-3" htmlFor="">
            Last Name
          </label>
          <input
            type="text"
            name=""
            id=""
            onChange={handleLastName}
            className="form-control"
            placeholder="Enter Last Name"
          />
          {lastNameError && (
            <small className="text text-danger">{lastNameError}</small>
          )}
          <br />
          <label className="mt-3" htmlFor="">
            Email
          </label>
          <input
            type="email"
            name=""
            id=""
            onChange={handleEmail}
            className="form-control"
            placeholder="Enter Email"
          />
          {emailError && (
            <small className="text text-danger">{emailError}</small>
          )}
          <br />
          <label className="mt-3" htmlFor="">
            Password
          </label>
          <input
            type="password"
            name=""
            id=""
            onChange={handlePassword}
            className="form-control"
            placeholder="Enter Password"
          />
          {passwordError && (
            <small className="text text-danger">{passwordError}</small>
          )}
          <br />
          <label className="mt-3" htmlFor="">
            Confirm Password
          </label>
          <input
            type="password"
            name=""
            id=""
            onChange={handleConfirmPassword}
            className="form-control"
            placeholder="Enter Password"
          />
          {confirmPasswordError && (
            <small className="text text-danger">{confirmPasswordError}</small>
          )}
          <br />
          <button className="btn btn-primary mt-3 w-100" onClick={handleSubmit}>
            Create Now
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;

// Make UI Complete
// Make state/variables to save value of each input temporarily
// Change every time we write something
// Submit
