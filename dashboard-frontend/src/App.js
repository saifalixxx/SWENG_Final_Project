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
  return (
    <div>
      <Graph type='pie' data={dummy} labels = {dummyLabels} />
      <Graph type= 'bar' data={barDummy} labels= {barDummyLabels} />
    </div>
  );
}

export default App;
