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
                    Language Breakdown
                    </div>
                </div>
                <div className="style2">
                    <div className='metricBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    The purpose of this metric is to asses the variety of languages used. This allows team leaders to assess
                    what languages are being used by their team and which are most popular. It would also be insightful for 
                    when somebody new is joining a team to see how the existing team is already working. In theroy this would 
                    allow for a smooth transition in the workplace and more efficient team work.
                    </div>
                </div>
                <div className="style1">
                    <div className='titleBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    Commit Activity and Burnout
                    </div>
                </div>
                <div className="style2">
                    <div className='metricBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                   This metric keeps a measure of the amount of weekly commits from the past year, while comparing these numbers to the average 
                   amount of commits over the time period shown in the graph. Seeing both the total amount of commits and the average amount 
                   allows for the burnout feature to work. This is an alert that brings attention to cases when there are over 30% more commits
                    made in a week than the average. This ensures that teams are making meaningful commits to their project and are not committing
                    work that is unnecessary or that a team is not overstretching their reach and resulting in them hitting a productivity wall. 
                    </div>
                </div>
                <div className="style1">
                    <div className='titleBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    Active Days per Week
                    </div>
                </div>
                <div className="style2">
                    <div className='metricBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    This metric measures the amount of days per week with active user activity. This metric is useful
                    to see ho well team members are distributing their work throughout the week and gives an indicator
                    as to whether they are taking sufficient break times.
                    </div>
                </div>
                <div className="style1">
                    <div className='titleBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    Work Breakdown 
                    </div>
                </div>
                <div className="style2">
                    <div className='metricBoxStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    This metric is to shows the addition and deletion of the content. The increase of action of both additon and subtraction of
                    content is very important in good software development. It shows that code is consistantly being worked on and ideally improved upon
                    </div>
                </div>
            </div>
            
        </div>
    );
    
    };

    export default AboutMetrics;