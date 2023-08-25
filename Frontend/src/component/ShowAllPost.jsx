import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';



const base_url = "http://localhost:9090";

function ShowAllPost() {
  


  const [user, setUser] = useState([]);
//   const [id , setId] = useState('');

   
  const getAllUserFromServer = () => {
    axios.get(`${base_url}/api/employees`).then(
      (response) => {
        // success
        console.log(response.data);
        console.log("data loaded successfully");
        setUser(response.data);
        
         if(response.data.length > 0){
           toast.success('🦄 Data loaded successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
         }
        
       
      },
      (error) => {
        // error message
        console.log(error);
        // console.log("server is down");
        toast.error('🦄 Something went wrong!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    );
  };


  useEffect(() => {
    document.title = "Showing All User";
    getAllUserFromServer();
    // toast.promise(
    //   getAllUserFromServer(),
    //   {
    //     pending: "Loading...",
    //     success: ({ user }) => `Fetched ${user.length} posts`,
    //     error: "An error occurred while fetching data",
    //   }
    // );
      
  },[]);

// deleting userfrom backend
  const deletePost = (id) =>{
    axios.delete(`${base_url}/api/employees/${id}`).then(
        (response) =>{
         console.log(response.data);
         setUser((prevUsers) => prevUsers.filter(user => user.id !== id));
         toast.success('🦄 Deleted Successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        }, 
        (error) => {
            console.log(error);
            console.log("server error something went wrong");
        }
        
    )
  }

  return (
    <>
    <ToastContainer />
      <div className="row">
        {user.length > 0
          ? user.map((item) => (
              <div className="col-sm-6 my-2" key={item.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Employee Information </h5>
                    <div className="card-text">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <span className="fw-bold">Id:</span> {item.id}
                        </li>
                        <li className="list-group-item">
                          <span className="fw-bold">First Name:</span>{" "}
                          {item.firstName}
                        </li>
                        <li className="list-group-item">
                          <span className="fw-bold">Last Name:</span>{" "}
                          {item.lastName}
                        </li>
                        <li className="list-group-item">
                          <span className="fw-bold">Email :</span>
                          {item.emailId}
                        </li>
                      </ul>
                    </div>

                    <Link
                      className="btn btn-primary mx-2"
                      style={{ width: "75px" }}
                      to={`/edituser/${item.id}`}
                    >
                      {" "}
                      Edit{" "}
                    </Link>
                    <button onClick={()=> deletePost(item.id)} className="btn btn-primary">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          : (<div className="col-sm-12 my-2">
          <div className="alert alert-info">
            No Employee to display.
          </div>
        </div>)}
      </div>
      
    </>
  );
}
export default ShowAllPost;
