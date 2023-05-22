import React from "react";
import './style.css';
import { memo } from "react";

import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    return (

        <div id='viewport'>
            <div className="header">
                <h1><i>Snapshot</i></h1>
                <div><input placeholder="Search..." /><img src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=search" alt="search" /></div>
           
                <ul>
                    <li><button onClick={() => { navigate("mountain") }}>Mountain</button></li>
                    <li><button onClick={() => { navigate("beaches") }}>Beaches</button></li>
                    <li><button onClick={() => { navigate("birds") }}>Birds</button></li>
                    <li><button onClick={() => { navigate("food") }}>Food</button></li>
                </ul>
            </div>

        </div>

    )
};

export default memo(Header);
