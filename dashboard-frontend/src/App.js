import './App.css';
import Graph from './graphClasses/Graph';



function App() {

  // fetch('api address')
  //   .then(response => response.json())
  //   .then(data => setData(data))

  const dummy = [44, 55, 13, 43, 22]
  const dummyLabels = ['Java', 'Python', 'C', 'Haskell', 'JavaScript']
  const barDummy = [34,55,76]
  const barDummyLabels = ['New Work', 'Refactor', 'Rework'] 
  const lineDummy = [1,2,3,3,4,5,6]
  const lineDummyLabels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  return (
    <div>
      <Graph type='pie' data={dummy} labels = {dummyLabels} />
      <Graph type= 'hbar' data={barDummy} labels= {barDummyLabels} />
      <Graph type= 'line' data={lineDummy} labels= {lineDummyLabels} />
    </div>
  );
}

export default App;
