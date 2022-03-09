import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserSettings } from "../icon/UserSettings";
import ButtonMailto from "./ButtonMailto";

const SingleUser = ({ index, data }) => {
  const [email, setEmail] = useState();

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
      <td>
        <ButtonMailto label={data.email} mailto={`mailto:${data.email}`} />
      </td>

      <td>{data.phone}</td>
    </>
  );
};

export default SingleUser;
