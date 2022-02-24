import React from "react";
import { Link } from "react-router-dom";

const SingleUser = ({ index, data }) => {
  return (
    <>
      <td>{index}</td>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <Link to={`/admin/user-profile/${data.uid}`}>
        <td>{data.email}</td>{" "}
      </Link>
      <td>{data.phone}</td>
      <td>{data.role}</td>{" "}
    </>
  );
};

export default SingleUser;