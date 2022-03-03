import React from "react";
import { Link } from "react-router-dom";
import { UserSettings } from "../icon/UserSettings";

const SingleUser = ({ index, data }) => {
  return (
    <>
      <td>{index}</td>
      <Link to={`/admin/user-profile/${data.uid}`}>
        <td>
          <UserSettings />
        </td>
      </Link>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td role="gridcell" style={{ padding: "0.5rem", width: "auto" }}>
        {data.email}
      </td>{" "}
      <td>{data.phone}</td>
      <td>{data.role}</td>{" "}
    </>
  );
};

export default SingleUser;
