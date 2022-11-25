import React, { Component } from 'react';
//import { useState } from 'react';
import SideBar from './Components/sidebar/Sidebar';
import Graph from './Components/graphs/Graph';
import './App.css';
import './styles.css';
import commits from './test_files/formatted_commits'
import commitsPerPerson from './test_files/other_one.json'
import churns from './test_files/code_churn.json'
import languages from './test_files/languages.json'

export default function App() {
  //const [theme, setTheme] = useState('dark');

  const dummy = [44, 55, 13, 43, 22]
  const dummyLabels = ['Java', 'Python', 'C', 'Haskell', 'JavaScript']
  const barDummy = [34, 55, 76]
  const barDummyLabels = ['New Work', 'Refactor', 'Rework']
  const lineDummy = [1, 2, 3, 3, 4, 5, 6]
  const lineDummyLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const barVDummy = [3, 14, 1, 1, 4, 4, 1, 1, 1]
  const barVDummyLabels = ["Andrew Chow", "MacroFake", "Ryan Ofsky", "Hennadii Stepanov", "Sebastian Falbesoner", "fanquake", "James O'Beirne", "Martin Zumsande", "Sjors Provoost"]


  return (
    <div className="App">

      <SideBar />
      <div id="page-wrap">
        <h1>SWENG Dashboard</h1>
      </div>
      <div className='row1'>
        <div>
          <button className='boxStyle' style={{ height: '140px', width: '200px' }}>
            <h1>Commits today:   15</h1>
          </button>
          <button className='boxStyle2' style={{ height: '140px', width: '200px' }}>
            <h1>Current number risk alerts: 2</h1>
          </button>
        </div>
        <Graph type='pie' data={dummy} labels={dummyLabels} />
        <Graph type='hbar' data={barDummy} labels={barDummyLabels} />
      </div>
      <div className='row2'>
        <Graph type='line' data={lineDummy} labels={lineDummyLabels} />
        <Graph type='vbar' data={barVDummy} labels={barVDummyLabels} />

        <div>
          <Graph type='pie' data={languages.data} labels={languages.labels} />
          <Graph type='hbar' data={churns.data} labels={churns.labels} />
          <Graph type='line' data={commitsPerPerson.data} labels={commitsPerPerson.labels} />
          <Graph type='vbar' data={commits.data} labels={commits.labels} />
        </div> 
      </div>
    </div>
  );
}
