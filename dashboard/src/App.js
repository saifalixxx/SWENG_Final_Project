import React, { Component } from 'react';
import './App.css';
import './styles.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Single from "./Pages/SingleUser"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path={"user1"} element={<Single/>}/>
            <Route path={"user2"} element={<Single/>}/>
            <Route path={"user3"} element={<Single/>}/>
            <Route path={"user4"} element={<Single/>}/>
            <Route path={"user5"} element={<Single/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
