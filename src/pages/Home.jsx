import React from "react";
import { FcGoogle } from "react-icons/fc";
import Buttons from "../components/Button";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Buttons texts="Sign up with Google" icon={<FcGoogle/>} />
    </div>
  );
}

export default Home;
