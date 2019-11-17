import React from 'react';
import {Link} from 'react-router-dom';


function Nav() {
    return(
    <nav>
        <h3>Logo</h3>
        <ul>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/map">
                <li>Map</li>
            </Link>
            <Link to="/list">
                <li>List</li>
            </Link>
               
        </ul>
    </nav>
    );
}

export default Nav; 