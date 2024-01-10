import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { GiWeightLiftingUp } from "react-icons/gi";


function Header() {

    return (
        <div className='Header'>
            <h1><GiWeightLiftingUp /> M.S.A</h1> 
            <div className='btn-container'>
                <Link to="/"> <button>Home</button></Link>
                <Link to="/admin"> <button>Admin</button></Link>
                <Link to="/timetable"> <button>Training Timetable</button></Link>
                <Link to="/tracking"> <button>Tracking</button></Link>
                <Link to="/meals"> <button>Meals</button></Link>
                


            </div>           
        </div>
    )
}

export default Header