import axios from "axios";
import React, { useState ,  } from "react";


const base_url = "http://localhost:9090";

export function Show() {
  const [user ,setUser] = useState({})
  const [id ,setId] = useState('');

  const handleInputChange = (event) => {
    setId(event.target.value);
  };


  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Your Input vlaue" + id);
    loadUserById();
    
  }
  

  // let's call userById
  const loadUserById  = async () =>{

    const result = await  axios.get(`${base_url}/api/employees/ ${id}`);
    setUser(result.data);
    console.log(result.data);
    
  }


// let's useEffect hook here for sending request to backend
// useEffect(()=>{

// },[])


  return (
    <>
  <div className="card border-warning mt-2">
  <div className="card-header bg-transparent border-warning">
  <form onSubmit={handleSearch} className="d-flex" role="search">
        <input   onChange={handleInputChange}   className="form-control me-2" type="text" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
  </div> { user.id &&
            <div className="card-body text-success">
          <div className="card" >
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{user.id}</li>
              <li className="list-group-item">{user.firstName}</li>
              <li className="list-group-item">{user.lastName}</li>
              <li className="list-group-item">{user.emailId}</li>
            </ul>
          </div>
            </div>}
  <div className="card-footer bg-transparent border-warning">Thank You</div>
</div>
    </>
  );
}
export default Show;
