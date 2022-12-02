import React, { Component } from 'react';
import './App.css';
import './styles.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Single from "./Pages/SingleUser"
import AboutUs from "./Pages/AboutUs"
import AboutMetrics from "./Pages/AboutMetrics"
import AboutRepo from "./Pages/AboutRepo"
import User1CodeFreq from "./berinaniesh_code_frequency.json"
import User2CodeFreq from "./10allday_code_frequency.json"
import User3CodeFreq from "./digisomni_code_frequency.json"
import User4CodeFreq from "./namark_code_frequency.json"
import User1Commits from "./berinaniesh_commit_activity.json"
import User2Commits from "./10allday_commit_activity.json"
import User3Commits from "./digisomni_commit_activity.json"
import User4Commits from "./namark_commit_activity.json"
import User1ActiveDays from "./Pages/Data/berinaniesh_active_days.json"
import User2ActiveDays from "./Pages/Data/10allday_active_days.json"
import User3ActiveDays from "./Pages/Data/digisomni_active_days.json"
import User4ActiveDays from "./Pages/Data/namark_active_days.json"


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path={"AboutUs"} element={<AboutUs/>}/>
            <Route path={"AboutMetrics"} element={<AboutMetrics/>}/>
            <Route path={"AboutRepo"} element={<AboutRepo/>}/>
            <Route path={"user1"} element={<Single title={"berinaniesh"} codeFreq= {User1CodeFreq} commitActivity = {User1Commits} activeDays = {User1ActiveDays}/>}/>
            
            <Route path={"user3"} element={<Single title={"digisomni"} codeFreq = {User3CodeFreq} commitActivity = {User3Commits} activeDays = {User3ActiveDays}/>}/>
            <Route path={"user4"} element={<Single title={"namark"} codeFreq = {User4CodeFreq} commitActivity = {User4Commits} activeDays = {User4ActiveDays}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
