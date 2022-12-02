import Sidebar from "../Components/sidebar/Sidebar";
import Titlebar from "../Components/titlebar/Titlebar";
import React from "react";
import "../styles.css"

const Alanna = ""
const AboutUs = () => {

    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Titlebar name={"About The Team"} />
                <div className="style1">
                    <div className='aboutBoxStyle' style={{ background: 'linear-gradient(45deg, #0b2f4d, #94eef8)' }}>
                        Alanna Fusciardi Wallace<br/> 
                        Computer Science and Business<br/>
                        Front-end Developer
                    </div>
                    <div className='aboutBoxStyle' style={{ background: 'linear-gradient(45deg, #0b2f4d, #94eef8)' }}>
                        Leah O'Connor<br/>
                        Computer Science and Business<br/>
                        Data Processer
                    </div>
                    <div className='aboutBoxStyle' style={{ background: 'linear-gradient(45deg, #0b2f4d, #94eef8)' }}>
                        Wen Lin<br/>
                        Integrated Computer Science<br/>
                        Back-end Developer
                    </div>
                </div>
                <div className="style1">
                    <div className='aboutBoxStyle' style={{ background: 'linear-gradient(45deg, #0b2f4d, #94eef8)' }}>
                        Micheal Keogh<br/>
                        Integrated Computer Science<br/>
                        Front-end Developer
                    </div>
                    <div className='aboutBoxStyle' style={{ background: 'linear-gradient(45deg, #0b2f4d, #94eef8)' }}>
                        Ryan Idowu<br/>
                        Computer Science and Business<br/>
                        Data Processer
                    </div>
                    <div className='aboutBoxStyle' style={{ background: 'linear-gradient(45deg, #0b2f4d, #94eef8)' }}>
                        Rian Walter<br/>
                        Integrated Computer Science<br/>
                        Back-end Developer
                    </div>
                </div>
                <div className="style1">
                    <div className='aboutBoxStyle' style={{ background: 'linear-gradient(45deg, #0b2f4d, #94eef8)' }}>
                        Saif Ali<br/>
                        Computer Science and Business<br/>
                        Infrastructure
                    </div>
                    <div className='aboutBoxStyle' style={{ background: 'linear-gradient(45deg, #0b2f4d, #94eef8)' }}>
                        Liam Hoogstad<br/>
                        Computer Science and Business<br/>
                        Team Leader
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;