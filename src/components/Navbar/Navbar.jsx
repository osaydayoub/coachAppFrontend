import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
import { GiWeightLiftingUp } from "react-icons/gi";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Navbar() {
  const { currentUser } = useAuth();
    const [menuOpen,setmenuOpen]=useState(false);
  return (
    <nav>
        <Link to="/" className='title'><h1><GiWeightLiftingUp />M.S.A</h1> </Link>
        <div className='menu' onClick={()=>{setmenuOpen(!menuOpen)}}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen?"open":""}>
            <li><NavLink to="/">Home</NavLink></li>
            {currentUser.isAdmin &&<li><NavLink to="/admin">Admin</NavLink></li>}
            <li><NavLink to="/timetable">Training Timetable</NavLink></li>
            <li><NavLink to="/tracking">Tracking</NavLink></li>
            <li><NavLink to="/meals">Meals</NavLink></li>
        </ul>

    </nav>
  )
}
