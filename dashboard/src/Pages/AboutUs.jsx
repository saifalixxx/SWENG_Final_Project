import Sidebar from "../Components/sidebar/Sidebar";
import Titlebar from "../Components/titlebar/Titlebar";
import React from "react";
import "../styles.css"

const Alanna = ""
const AboutUs = () => {
    
    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
            <Titlebar name = {"About The Team"}/>
               <div className="style1">
                    <div className='aboutBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    Name: Alanna Fusciardi Wallace   Course: Computer Science and            Business                              Team: Front-End           
                 
                </div>
                <div className='aboutBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                   
                          Name: Leah O'Connor                 
                    Course: Computer Science and           Business                             
                                   Team: Data Processing             
                </div>
                <div className='aboutBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                   
                                  Name: Wen Lin            
                                Course: ICS            
                                    Team: Back-end              
                </div>
                </div>
                <div className="style1">
                    <div className='aboutBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    
                          Name: Micheal Keogh      
                            Course: ICS                        
                            Team: Front-End
                </div>
                <div className='aboutBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                   
                           Name: Ryan Idowu                      
                    Course: Computer Science and                   Business                            
                    Team: Data Processing
                </div>
                <div className='aboutBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                              Name: Rian Walter        
                                      Course: ICS                         
                        Team: Back-end
                </div>
                </div>
                <div className="style1">
                    <div className='aboutBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                                   Name: Saif Ali               
                      Course: Computer Science and                      Business                               Team: Infrastructure              
                </div>
                <div className='aboutBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                      Name: Liam Hoogstad                    
                    Course: Computer Science and                 Business                        
                    Team: Team Leader
                </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;