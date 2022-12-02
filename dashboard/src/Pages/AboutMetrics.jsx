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
                    The purpose of this metric is to asses the variety of languages used. This allows team leaders to assess
                    what languages are being used by their team and whihc are more popular. It would also be insightful for 
                    when somebody new is joining a team to see how the existing team is already working. In theroy this would 
                    allow for a smooth transition in the workplace and more efficient team work.
                    </div>
                </div>
                <div className="style1">
                    <div className='titleBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    Commits Activity and Burnout
                    </div>
                </div>
                <div className="style2">
                    <div className='metricBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                   This metric keeps a measure of the amount of commmits made over time. This will show a team how they are working.
                   It will also measure and show the average anount of commits over the time period shown in the graph. Seeing both 
                   the total amount of committs and the average amount allows for the burnout feature to work. This is an alert that 
                   brings attention to cases when there are more committs made tha usual. This helps to ensure that teams are making 
                   meaningful committs to their project and are not committing work that is unnessicary or that a team is not overstretching 
                   their reach and going to hit a wall in their productivity 
                    </div>
                </div>
                <div className="style1">
                    <div className='titleBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    Committs
                    </div>
                </div>
                <div className="style2">
                    <div className='metricBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    This metric measures who is commiting and how much they are doing so. This shows productivity on a personal level 
                    for team memebers. This allows teams to see what proportions of the work is being done by who. This is very insightful 
                    to team leads specifically. This metric along with how meaningful the committs are a strong indicater of the work happening
                    person to person within a team.
                    </div>
                </div>
                <div className="style1">
                    <div className='titleBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    Work Breakdown 
                    </div>
                </div>
                <div className="style2">
                    <div className='metricBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    This metric is to shows the addition and deletion of the content. The increse of action of both additon and subtraction of
                    content is very important in good software development. It shows that code is consistantly being worked on and ideally improved upon
                    </div>
                </div>
            </div>
            
        </div>
    );
    
    };

    export default AboutMetrics;