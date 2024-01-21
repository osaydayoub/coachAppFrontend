import React, { useEffect } from "react";
import "./AdminPage.css";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext.jsx";
import Client from "../../components/Client/Client";
// import { useNavigate } from "react-router-dom";

function AdminPage() {
  const { clientsData, setClientsData, getClients } = useData();
  useEffect(() => {
    if (clientsData === null) {
      getClients();
    }
  }, []);
  return (
    <div className="AdminPage page">
      <input
        className="search-box"
        type="text"
        placeholder="Search by Client Name ..."
      />
      {clientsData && (
        <div className="clients-container">
          {clientsData.map((client,index)=>{
            return(<Client key={index} client={client} index={index}/>)
          })}
        </div>
      )}
    </div>
  );
}

export default AdminPage;
