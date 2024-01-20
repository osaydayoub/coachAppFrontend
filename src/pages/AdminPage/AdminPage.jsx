import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

function AdminPage() {
  // const navigate = useNavigate();
  // const { isLoggedIn} = useAuth();
  // useEffect(()=>{
  //   if(!isLoggedIn){
  //     navigate("/login")
  //   }
  // },[])

  return (
    <div className="page">
      <h1>AdminPage</h1>
    </div>
  );
}

export default AdminPage;
