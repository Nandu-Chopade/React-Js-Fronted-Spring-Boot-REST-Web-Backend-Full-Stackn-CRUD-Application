import React from 'react';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

 export function Delete() {
   const handleClicked = (event) => {
      event.preventDefault();
      toast.warning("Employee deleted successfully !")
   }
  return(
     <>
     <ToastContainer/>
    <div className="card border-warning mt-5" >
    <div className="card-header">Delete Your Post</div>
    <div className="card-body">
    <h5 className="card-title">Do You Want Delete Post </h5>
    <p className="card-text"> click on below button to delete post from server.</p>
    <button type="submit" className="btn btn-primary" onClick={handleClicked}>Delete</button>
  </div>
    </div>
     </>
  )
}
export default Delete;