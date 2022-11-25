import "./singleuser.scss"
import Sidebar from "../Components/sidebar/Sidebar";
import "../styles.css"
import ApexChart from "../Components/graphs/ApexChart";
import ApexPlot from "../Components/graphs/ApexPlot";
import VertBar from "../Components/graphs/VertBar";
import ApexBar from '../Components/graphs/ApexBar';

const Single = () => {
    const dummy = [44, 55, 13, 43, 22]
    const dummyLabels = ['Java', 'Python', 'C', 'Haskell', 'JavaScript']
    const barDummy = [34, 55, 76]
    const barDummyLabels = ['New Work', 'Refactor', 'Rework']
    const lineDummy = [1, 2, 3, 3, 4, 5, 6]
    const lineDummyLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const barVDummy = [3, 14, 1, 1, 4, 4, 1, 1, 1]
    const barVDummyLabels = ["Andrew Chow", "MacroFake", "Ryan Ofsky", "Hennadii Stepanov", "Sebastian Falbesoner", "fanquake", "James O'Beirne", "Martin Zumsande", "Sjors Provoost"]

    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <div className="row1">
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
export default Single;