import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="d-flex justify-content-around">
      <h2 className='mb-5 p-2'>Web Gallery</h2>
      <div>
        {isAuthenticated
          ? <button onClick={() => logout()}>Log out</button>
          : <button onClick={() => loginWithRedirect({})}>Log in</button>
        }
      </div>
    </div>
  );
};

export default NavBar;
