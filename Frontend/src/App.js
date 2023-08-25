import React from "react";
import "./App.css";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddPost from "./component/AddPost";
import Show from "./component/Show";
import Update from "./component/Update";
import Welcome from "./component/Welcome";
import ShowAllPost from "./component/ShowAllPost";
import AppFormValidation from "./component/AppFormValidation";

// import UpdateFormValidation from "./component/UpdateFormValidation";


function App() {
  return (
    <>
      <Router>
        <Welcome />
        {/* <UpdateFormValidation/> */}
        <div className="container">
        <div className="row">
          <div className="col-4" style={{ border: "2px solid #FFC107" , borderRightStyle:"none"}}>
            <Header />
          </div>
          <div className="col-8" style={{ border: "2px solid #FFC107" }}>
            <Routes>
              <Route path="/addpost" element={<AddPost />} />
              <Route path="/show" element={<Show />} />
              <Route path="/showall" element={<ShowAllPost/>} />
              <Route path="/login" element={<AppFormValidation/>} />
              <Route path="/edituser/:id" element={<Update />} />
            </Routes>
          </div>
        </div>
        </div>

      </Router>
    </>
  );
}

export default App;
