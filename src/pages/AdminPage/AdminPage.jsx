import React, { useEffect } from "react";
import "./AdminPage.css"
import { useAuth } from "../../context/AuthContext";
import Client from "../../components/Client/Client";
// import { useNavigate } from "react-router-dom";

function AdminPage() {

  return (
    <div className="AdminPage page">
      <input className="search-box" type="text" placeholder="Search by Client Name ..." />
      <div className="client-container">
      <Client/>
      </div>
    </div>
  );
}

export default AdminPage;
