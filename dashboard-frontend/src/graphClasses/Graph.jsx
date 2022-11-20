import React from 'react'
import ApexBar from './ApexBar';
import ApexChart from './ApexChart';
import ApexPlot from './ApexPlot';

const Graph = ({ type, data, labels }) => {
    switch (type) {
        case 'hbar':
            return (
                <ApexBar data={data} dLabels={labels} />
            )
        case 'pie':
            return (
                <ApexChart data={data} dLabels={labels} />
            )
        case 'line':
            return (
                <ApexPlot data={data} dLabels={labels} />
            )
        default:
            return (
                <h4>Not Found</h4>
            )
    }
}

export default Graph