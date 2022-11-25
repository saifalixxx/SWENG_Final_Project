import Sidebar from "../Components/sidebar/Sidebar";
import "./home.scss"
import "../styles.css"
import ApexChart from "../Components/graphs/ApexChart";
import ApexPlot from "../Components/graphs/ApexPlot";
import VertBar from "../Components/graphs/VertBar";
import ApexBar from '../Components/graphs/ApexBar';

const Home = () => {

    const dummy = [44, 55, 13, 43, 22]
    const dummyLabels = ['Java', 'Python', 'C', 'Haskell', 'JavaScript']
    const barDummy = [34, 55, 76]
    const barDummyLabels = ['New Work', 'Refactor', 'Rework']
    const lineDummy = [1, 2, 3, 3, 4, 5, 6]
    const lineDummyLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const barVDummy = [3, 14, 1, 1, 4, 4, 1, 1, 1]
    const barVDummyLabels = ["Andrew Chow", "MacroFake", "Ryan Ofsky", "Hennadii Stepanov", "Sebastian Falbesoner", "fanquake", "James O'Beirne", "Martin Zumsande", "Sjors Provoost"]


    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <div className="row1">
                    <div>
                        <button className='boxStyle' style={{ height: '140px', width: '200px' }}>
                            <h1>Commits today:   15</h1>
                        </button>
                        <button className='boxStyle2' style={{ height: '140px', width: '200px' }}>
                            <h1>Current number risk alerts: 2</h1>
                        </button>
                    </div>
                    <ApexChart data={dummy} dLabels={dummyLabels}/>
                    <ApexPlot data={lineDummy} dLabels={lineDummyLabels}/>
                </div>
                <div className="row2">
                    <VertBar data={barVDummy} dLabels={barVDummyLabels}/>
                    <ApexBar data={barDummy} dLabels={barDummyLabels}/>
                </div>
            </div>
        </div>
    );
};

export default Home;