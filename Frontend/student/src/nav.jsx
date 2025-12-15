import {Link} from "react-router-dom";
import React from "react";
import './Nav.css';

function Nav(){
    return(
        <nav>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/registration">Form</Link></li>
                <li><Link to="/records">Records</Link></li>
                <li><Link to="/marks">Marks</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;