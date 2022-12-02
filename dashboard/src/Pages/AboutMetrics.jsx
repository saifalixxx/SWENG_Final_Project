import Sidebar from "../Components/sidebar/Sidebar";
import Titlebar from "../Components/titlebar/Titlebar";
import React from "react";
import "../styles.css"


const AboutMetrics = () => {
    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
            <Titlebar name = {"About Our Metrics"}/>
            <div className="style1">
                    <div className='titleBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    Language
                    </div>
                </div>
                <div className="style2">
                    <div className='metricBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    The purpose of this metric is to asses the variety of languages used
                    </div>
                </div>
                <div className="style1">
                    <div className='titleBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    Commits Per Week
                    </div>
                </div>
                <div className="style2">
                    <div className='metricBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                   
                    </div>
                </div>
                <div className="style1">
                    <div className='titleBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    
                    </div>
                </div>
                <div className="style2">
                    <div className='metricBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    
                    </div>
                </div>
                <div className="style1">
                    <div className='titleBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    
                    </div>
                </div>
                <div className="style2">
                    <div className='metricBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    
                    </div>
                </div>
            </div>
            
        </div>
    );
    
    };

    export default AboutMetrics;