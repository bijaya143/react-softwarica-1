import React, { useEffect } from "react";
import { testNewApi } from "../../../apis/Api";

const Login = () => {
  useEffect(() => {
    testNewApi()
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        return error;
      });
  });
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
};

export default Login;
