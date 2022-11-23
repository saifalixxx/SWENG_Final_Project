import React from 'react';
import SideBar from './Components/Sidebar';
import Graph from './Components/Graph';
import './App.css';
import commits from './test_files/formatted_commits'
import commitsPerPerson from './test_files/other_one.json'
import churns from './test_files/code_churn.json'
import languages from './test_files/languages.json'

export default function App() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap">
        <h1>SWENG Dashboard</h1>
      </div>
      <div>
        <Graph type='pie' data={languages.data} labels = {languages.labels} />
        <Graph type= 'hbar' data={churns.data} labels= {churns.labels} />
        <Graph type= 'line' data={commitsPerPerson.data} labels= {commitsPerPerson.labels} />
        <Graph type= 'vbar' data={commits.data} labels= {commits.labels} />
      
      </div>
    </div>
  );
}