import React, { Fragment } from "react";
import { useAuth0 } from "../../react-auth0-spa";

const UsersList = (props) => {
  const { loading, user } = useAuth0();

  useEffect(() => {
    props.getUsers();
  }, []);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default UsersList;
