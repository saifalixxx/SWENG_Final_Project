import React, { Component } from 'react';
import './App.css';
import './styles.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Single from "./Pages/SingleUser"
import AboutUs from "./Pages/AboutUs"
import AboutMetrics from "./Pages/AboutMetrics"
import AboutRepo from "./Pages/AboutRepo"


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
            <Route path={"user1"} element={<Single title={"User 1"}/>}/>
            <Route path={"user2"} element={<Single title={"User 2"}/>}/>
            <Route path={"user3"} element={<Single title={"User 3"}/>}/>
            <Route path={"user4"} element={<Single title={"User 4"}/>}/>
            <Route path={"user5"} element={<Single title={"User 5"}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
