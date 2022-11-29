import Sidebar from "../Components/sidebar/Sidebar";
import "./home.scss"
import "../styles.css"
import ApexChart from "../Components/graphs/ApexChart";
import ApexPlot from "../Components/graphs/ApexPlot";
import VertBar from "../Components/graphs/VertBar";
import ApexBar from '../Components/graphs/ApexBar';
import languages from './formatted_languages.json'
import percentage from './formatted_languages.json'
import labels from './formatted_commits.json'
import data from './formatted_commits.json'
import total from './commit_activity.json' 

const Home = () => {

    const barDummy = [34, 55, 76]
    const barDummyLabels = ['New Work', 'Refactor', 'Rework']
    const barVDummy = [3, 14, 1, 1, 4, 4, 1, 1, 1]
    const barVDummyLabels = ["Andrew Chow", "MacroFake", "Ryan Ofsky", "Hennadii Stepanov", "Sebastian Falbesoner", "fanquake", "James O'Beirne", "Martin Zumsande", "Sjors Provoost"]
    const weekLabels = ["W1", "W5", "W10", "W15", "W20", "W25", "W30", "W35", "W40", "W45", "W50"]
    const weekNos = [total[0].total, total[4].total, total[9].total, total[14].total, total[19].total, total[24].total, total[29].total, total[34].total, total[39].total, total[44].total, total[49].total]

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
                    <ApexChart data={percentage.percentage} dLabels={languages.languages}/>
                    <ApexBar data={barDummy} dLabels={barDummyLabels}/>
                </div>
                <div className="row2">
                <ApexPlot data={weekNos} dLabels={weekLabels}/>
                    <VertBar data={barVDummy} dLabels={barVDummyLabels}/>
                </div>
            </div>
        </div>
    );
};

export default Home;