import "./singleuser.scss"
import Sidebar from "../Components/sidebar/Sidebar";
import Titlebar from "../Components/titlebar/Titlebar";
import "../styles.css"
import ApexChart from "../Components/graphs/ApexChart";
import ApexPlot from "../Components/graphs/ApexPlot";
import VertBar from "../Components/graphs/VertBar";
import ApexBar from '../Components/graphs/ApexBar';

const Single = ({ title, codeFreq, commitActivity, activeDays }) => {
    const totalLinesAdded = codeFreq["lines added"].reduce((sum, a) => sum + a, 0);
    const totalLinesDeleted = codeFreq["lines deleted"].reduce((sum, a) => sum - a, 0);
    const totalLines = totalLinesAdded + totalLinesDeleted
    console.log(codeFreq)
    const freqData = [(totalLinesAdded / totalLines).toFixed(1) * 100, (totalLinesDeleted / totalLines).toFixed(1) * 100]
    const weekLabels = ["W1", "W5", "W10", "W15", "W20", "W25", "W30", "W35", "W40", "W45", "W50"]
    const weekNos = [commitActivity[0], commitActivity[4], commitActivity[9], commitActivity[14], commitActivity[19], commitActivity[24], commitActivity[29], commitActivity[34], commitActivity[39], commitActivity[44], commitActivity[49]]
    const daysDummy = [1,7,4,3,2,1,4,5,3,3]
    
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
                    <ApexPlot data={weekNos} dLabels={weekLabels}/>
                    <VertBar data={activeDays} dLabels={weekLabels} />
                </div>
            </div>
        </div>
    );
};
export default Single;