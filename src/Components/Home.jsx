import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <Link to="/profile/12">
        <button>TO PROFILE</button>
      </Link>
      <button
        onClick={() => {
          // login logic
          navigate("/services");
        }}
      >
        TO Services
      </button>
    </div>
  );
};

export default Home;
