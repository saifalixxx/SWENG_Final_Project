import Sidebar from "../Components/sidebar/Sidebar";
import Titlebar from "../Components/titlebar/Titlebar";
import "./home.scss"
import "../styles.css"
import ApexChart from "../Components/graphs/ApexChart";
import ApexPlot from "../Components/graphs/ApexPlot";
import VertBar from "../Components/graphs/VertBar";
import ApexBar from '../Components/graphs/ApexBar';
import languages from '../languages.json'
import percentage from '../languages.json'
import total from '../commit_activity.json'
import freq from '../code_frequency.json'
import days from './active_days.json'

const Home = () => {
    const totalLinesAdded = freq["lines added"].reduce((sum, a) => sum + a, 0);
    const totalLinesDeleted = freq["lines deleted"].reduce((sum, a) => sum - a, 0);
    const totalLines = totalLinesAdded + totalLinesDeleted
    const freqData = [(totalLinesAdded / totalLines).toFixed(1) * 100, (totalLinesDeleted / totalLines).toFixed(1) * 100]
    const barVDummy = [3, 14, 1, 1, 4, 4, 1, 1, 1]
    const barVDummyLabels = ["Andrew Chow", "MacroFake", "Ryan Ofsky", "Hennadii Stepanov", "Sebastian Falbesoner", "fanquake", "James O'Beirne", "Martin Zumsande", "Sjors Provoost"]
    const weekLabels = ["W1", "W5", "W10", "W15", "W20", "W25", "W30", "W35", "W40", "W45", "W50"]
    const weekNos = [total[0].total, total[4].total, total[9].total, total[14].total, total[19].total, total[24].total, total[29].total, total[34].total, total[39].total, total[44].total, total[49].total]
    const activeDays = [days[0], days[4], days[9], days[14], days[19], days[24], days[29], days[34], days[39], days[44], days[49]]
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Titlebar name={"Github Metrics Dashboard"} />
                {/* Change colors pls  */}
                <div className="stats">
                    <a className='boxStyle' href={`https://github.com/`} style={{ background: 'linear-gradient(45deg, #0b2f4d, #94eef8)' }}>
                            Github
                    </a>
                </div>
                <div className="row1">
                    <ApexChart data={percentage.percentage} dLabels={languages.languages} />
                    <ApexBar data={freqData} dLabels={['Lines added(%)', 'Lines deleted(%)']} />
                </div>
                <div className="row2">
                    <ApexPlot data={weekNos} dLabels={weekLabels} />
                    <VertBar data={activeDays} dLabels={weekLabels} />
                </div>
            </div>
        </div>
    );
};

export default Home;