import React, { useEffect } from "react";
import { testApi } from "../../apis/Api";

const Homepage = () => {
  useEffect(() => {
    // console.log("Hello");

    testApi()
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        return error;
      });
  });

  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
};

export default Homepage;
