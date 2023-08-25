import React, { useEffect } from "react";
import {Link, useLocation} from 'react-router-dom';
// import Welcome from "./Welcome"

export function Header() {
   let location = useLocation();
   useEffect(() =>{
    console.log(location.pathname)
   },[location]);
  return (
    <>
    {/* Your Welocome Component Here */}
    {/* <Welcome/> */}

    <h5 className=" my-3 text-center">Your request is accepted here</h5>
            <ul className="list-group my-5 text-center  sticky-top" >
              <Link className={`list-group-item ${location.pathname === "/addpost" ? "active" : "" }`} to="/addpost">Add Post </Link>
              <Link className={`list-group-item ${location.pathname === "/show" ? "active" : "" }`}  to="/show">Show Post By Id</Link>
              <Link className={`list-group-item ${location.pathname === "/showall" ? "active" : "" }`}  to="/showall">Show All Post</Link>
              <Link className={`list-group-item ${location.pathname === "/login" ? "active" : "" }`}  to="/login">Lon In</Link>
            </ul>
    
    </>
  );
}

export default Header;
