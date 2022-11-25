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
            <Route path={"User"} element={<Single/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
