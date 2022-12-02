import "./singleuser.scss"
import Sidebar from "../Components/sidebar/Sidebar";
import Titlebar from "../Components/titlebar/Titlebar";
import "../styles.css"
import ApexChart from "../Components/graphs/ApexChart";
import ApexPlot from "../Components/graphs/ApexPlot";
import VertBar from "../Components/graphs/VertBar";
import ApexBar from '../Components/graphs/ApexBar';

const Single = ({ title, codeFreq, commitActivity }) => {
    const totalLinesAdded = codeFreq["lines added"].reduce((sum, a) => sum + a, 0);
    const totalLinesDeleted = codeFreq["lines deleted"].reduce((sum, a) => sum - a, 0);
    const totalLines = totalLinesAdded + totalLinesDeleted
    const freqData = [(totalLinesAdded / totalLines).toFixed(1) * 100, (totalLinesDeleted / totalLines).toFixed(1) * 100]
    const barVDummy = [3, 14, 1, 1, 4, 4, 1, 1, 1]
    const barVDummyLabels = ["Andrew Chow", "MacroFake", "Ryan Ofsky", "Hennadii Stepanov", "Sebastian Falbesoner", "fanquake", "James O'Beirne", "Martin Zumsande", "Sjors Provoost"]
    const weekNos = commitActivity
    console.log(weekNos)
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Titlebar name={title} />
                {/* Change colors pls  */}
                <div className="stats">
                    <a className='boxStyle' href={`https://github.com/${title}`} style={{ background: 'linear-gradient(45deg, #0b2f4d, #94eef8)' }}>
                        Github
                    </a>
                </div>
                <div className="row1">
                    {/* <ApexChart data={} dLabels={languages.languages} /> */}
                    <ApexBar data={freqData} dLabels={['Lines added(%)', 'Lines deleted(%)']} />
                </div>
                <div className="row2">
                    <ApexPlot data={commitActivity}/>
                    <VertBar data={barVDummy} dLabels={barVDummyLabels} />
                </div>
            </div>
        </div>
    );
};
export default Single;