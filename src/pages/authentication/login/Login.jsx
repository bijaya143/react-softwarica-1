import React, { useState } from "react";
import { loginUserApi } from "../../../apis/Api";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error States
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Handle Error States
  var validate = () => {
    var isValid = true;
    if (email.trim() === "") {
      setEmailError("Please enter email.");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Please enter password.");
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

    // Making
    const data = {
      email: email,
      password: password,
    };
    loginUserApi(data)
      .then((res) => {
        console.log(res.data);
        if (res.data?.success === false) {
          toast.error(res.data?.message);
        } else {
          toast.success(res.data?.message);

          localStorage.setItem("token", res.data?.data); // Set Token

          // Decode Token and Convert JSON
          const user = jwtDecode(res.data.data);
          const stringifiedData = JSON.stringify(user);

          localStorage.setItem("user", stringifiedData); // Set User

          window.location.reload(); // Page Reload
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div>
        <h1 className="m-3">Login</h1>
        <form className="w-25 m-3">
          <label className="mt-3" htmlFor="">
            Email
          </label>
          <input
            type="email"
            name=""
            id=""
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter Password"
          />
          {passwordError && (
            <small className="text text-danger">{passwordError}</small>
          )}
          <br />
          <button className="btn btn-primary mt-3 w-100" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
