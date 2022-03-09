import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserSettings } from "../icon/UserSettings";

const SingleUser = ({ index, data }) => {
  const [email, setEmail] = useState()

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
      <a href="mailto:?subject=Culinary Collective <3 &amp;body=Hello, We would like to hear about your feeback. :)">
      <td style={{ padding: "0.5rem", width: "auto" }}>
        {data.email}
      </td>{" "}</a>
      <td>{data.phone}</td>
     
    </>
  );
};

export default SingleUser;
