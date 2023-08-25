import { useState , useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


const base_url = "http://localhost:9090";


 export function Update(){
  // using useParams for react-router-dom here putting params in id variable
    const {id} = useParams();
    const navigate = useNavigate();
     console.log("This is params" + id);
      

    
      const [user , setUser ] = useState({});

      // user will be pass here instead of user 
      const updateDataOnServer = (user) =>{
        // calling axious put method for update here passing params to it as id
        axios.put(`${base_url}/api/employees/${id}`, user).then(
          (response)=>{
     // success 
     console.log(response.data);
     console.log("data loaded successfully");
     toast.success("Data updated successfully");
      getAllUserFromServer(); // Fetch updated data and setting new data to ShowAllPost component
      navigate("/showall"); // Navigate back to ShowAllPost component
    
          },
          (error)=>{
     // error message 
     console.log(error)
     console.log("server is down")
          }
         )
      }
   
      // let's load that id regarding user here for show in form field 
      const loadUserById  = async () =>{
        const result = await  axios.get(`${base_url}/api/employees/${id}`);
        setUser(result.data);
        console.log(result.data)
      }

  // let's useEffect hook here for sending request to backend
  useEffect(()=>{
    loadUserById();
  },[])

  const getAllUserFromServer = () => {
    axios.get(`${base_url}/api/employees`).then(
      (response) => {
        // success
        console.log(response.data);
        console.log("data loaded successfully");
        setUser(response.data);
      },
      (error) => {
        // error message
        console.log(error);
        console.log("server is down");
      }
    );
  };
  const edithandel = (event) =>{
    event.preventDefault();

    // this user agrument is state varible pass to updateDataOnSarve() function
    updateDataOnServer(user) ;
    console.log(user);
  }
  return(
   <>
   <ToastContainer/>
   <div className="jumbotron">
     <form onSubmit={edithandel}>
       <div className="mb-3">
         <label className="form-label">First Name</label>
         <input type="text" 
         className="form-control"
         value={user.firstName}
         onChange={(e)=>{
          setUser({...user, firstName:e.target.value})
         }}
         />
       </div>
       <div className="mb-3">
         <label className="form-label">Last Name</label>
         <input tyaddresspe="text"
          className="form-control"
          value={user.lastName}
          onChange={(e)=>{
            setUser({...user, lastName:e.target.value})
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
           value={user.emailId}
           onChange={(e)=>{
            setUser({...user, emailId:e.target.value})
           }}
         />
         <div id="emailHelp" className="form-text">
           We'll never share your email with anyone else.
         </div>
         <button type="submit" onClick={()=>{
            toast.success("succussfully login")
         }} className="btn btn-primary" >Update</button>
       </div>
     </form>
   </div>
   
  </>
  )
}
export default Update;