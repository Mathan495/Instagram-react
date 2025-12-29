import React from "react"
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";


function Navbar(){

    const navigate = useNavigate();
    
    return (
        <>
            <div className="nav-icons d-flex gap-3">
                <div><i class="bi bi-house-door-fill"></i></div>
                <div><i class="bi bi-play-btn"></i></div>
                <div><i class="bi bi-send"></i></div>
                <div><i class="bi bi-search"></i></div>
                <div onClick={() => { navigate('/profile') }}><i class="bi bi-person-circle"></i></div> 
            </div>
        </>
    );
}
export default Navbar 