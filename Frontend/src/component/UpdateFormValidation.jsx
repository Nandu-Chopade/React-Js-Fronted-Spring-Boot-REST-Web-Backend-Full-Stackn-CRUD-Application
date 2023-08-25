import { useState} from 'react';
import { ToastContainer} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


// const base_url = "http://localhost:9090";


 export function UpdateFormValidation(){
 
     const initialErrorState = {
      firstname: null, // Set to null initially
      // Add more fields here if needed
    };
      
     const [form , setForm] = useState();
     const [error , setError] = useState(initialErrorState);
    const setFiled = (field , value) =>{
      setForm({
        ...form ,
        [field]:value
      })
      if(!!error[field]){
        setError({
          ...error, 
          // set null removed error 
          [field]:null
        })
      }
    }   
  
  const edithandel = (event) =>{
    event.preventDefault();


  }
  return(
   <>
   <div className="jumbotron">
     <form onSubmit={edithandel}>
       <div className="mb-3" id='firstname'>
         <label className="form-label">First Name</label>
         <input type="text" 
         className={`form-control ${error?.firstname ? 'is-invalid' : ''}`}
       
         onChange={(e)=>{
          setFiled('firstname', e.target.value)
         }}
         isInvalid={!!error.firstname}
         />
         <div className="invalid-feedback"><p>{error.firstname}</p></div>
       </div>
       <div className="mb-3">
         <label className="form-label">Last Name</label>
         <input tyaddresspe="text"
          className="form-control"
         
          onChange={(e)=>{
          
           }}/>
       </div>
       <div className="mb-3 ">
         <label htmlFor="exampleInputEmail1" className="form-label">
           Email address
         </label>
         <input
           type="email"
           className="form-control"
           id="exampleInputEmail1"
           aria-describedby="emailHelp"
           
           onChange={(e)=>{ 
           
           }}
         />
         <div id="emailHelp" className="form-text">
           We'll never share your email with anyone else.
         </div>
         <button type="submit" className="btn btn-primary" >Update</button>
       </div>
     </form>
   </div>
   <ToastContainer/>
  </>
  )
}
export default UpdateFormValidation;