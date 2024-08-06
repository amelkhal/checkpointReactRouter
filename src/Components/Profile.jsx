import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  console.log(useParams());
  return <div>This is a user Profile</div>;
};

export default Profile;
