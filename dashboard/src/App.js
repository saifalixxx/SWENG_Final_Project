import React from 'react';
import SideBar from './Components/Sidebar';
import Graph from './Components/Graph';

import './App.css';

export default function App() {
  const dummy = [44, 55, 13, 43, 22]
  const dummyLabels = ['Java', 'Python', 'C', 'Haskell', 'JavaScript']
  const barDummy = [34,55,76]
  const barDummyLabels = ['New Work', 'Refactor', 'Rework'] 
  const lineDummy = [1,2,3,3,4,5,6]
  const lineDummyLabels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  const barVDummy = [3,14,1,1,4,4,1,1,1]
  const barVDummyLabels = ["Andrew Chow","MacroFake","Ryan Ofsky","Hennadii Stepanov","Sebastian Falbesoner","fanquake","James O'Beirne","Martin Zumsande","Sjors Provoost"]
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap">
        <h1>SWENG Dashboard</h1>
      </div>
      <div>
        <Graph type='pie' data={dummy} labels = {dummyLabels} />
        <Graph type= 'hbar' data={barDummy} labels= {barDummyLabels} />
        <Graph type= 'line' data={lineDummy} labels= {lineDummyLabels} />
        <Graph type= 'vbar' data={barVDummy} labels= {barVDummyLabels} />
      
      </div>
    </div>
  );
}