import './App.css';
import React, {useEffect} from 'react';
import Graph from './graphClasses/Graph';
import raw from './formatted_commits.txt';
import { total } from './commit_activity.json';
const axios = require('axios').default;





function App() {

  // fetch('api address')
  //   .then(response => response.json())
  //   .then(data => setData(data))
  
  /*let fetchData = async()=> {
    let resp = await axios.get('./formatted_commits.txt');
    let final = await resp.data;
    console.log(final)
  }
  useEffect(()=>{
    fetchData();
},[]) */

fetch(raw)
  .then(r => r.text())
  .then(text => {
    console.log('text decoded:', text);
  });

  const dummy = [44, 55, 13, 43, 22]
  const dummyLabels = ['Java', 'Python', 'C', 'Haskell', 'JavaScript']
  const barDummy = [34,55,76]
  const barDummyLabels = ['New Work', 'Refactor', 'Rework'] 
  const lineDummy = [1,2,3,3,4,5,6]
  const lineDummyLabels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  const barVDummy = [3,14,1,1,4,4,1,1,1]
  const barVDummyLabels = ["Andrew Chow","MacroFake","Ryan Ofsky","Hennadii Stepanov","Sebastian Falbesoner","fanquake","James O'Beirne","Martin Zumsande","Sjors Provoost"]
  return (
    <div>
      <Graph type='pie' data={dummy} labels = {dummyLabels} />
      <Graph type= 'hbar' data={barDummy} labels= {barDummyLabels} />
      <Graph type= 'line' data={lineDummy} labels= {lineDummyLabels} />
      <Graph type= 'vbar' data={barVDummy} labels= {barVDummyLabels} />
      
          </div>
  );
}

export default App;
