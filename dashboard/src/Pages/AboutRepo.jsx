import Sidebar from "../Components/sidebar/Sidebar";
import Titlebar from "../Components/titlebar/Titlebar";
import React from "react";
import "../styles.css"


const AboutRepo = () => {
    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
            <Titlebar name = {"About the Repository"}/>
            
            </div>
        </div>
    );
    
    };

    export default AboutRepo;