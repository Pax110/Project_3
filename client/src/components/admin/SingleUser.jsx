import React from "react";
import { Link } from "react-router-dom";
import { UserSettings } from "../icon/UserSettings";

const SingleUser = ({ index, data }) => {
  return (
    <>
      <td>{index}</td>
      <td>
        <Link to={`/admin/user-profile/${data.uid}`}>
          <UserSettings />
        </Link>
      </td>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <a href="mailto:?subject=Culinary Collective <3 &amp;body=Hello friend, check out this amazing site for local home based businesses and commissary kitchens! Hope you like it :)">
      <td role="gridcell" style={{ padding: "0.5rem", width: "auto" }}>
        {data.email}
      </td>{" "}</a>
      <td>{data.phone}</td>
     
    </>
  );
};

export default SingleUser;
