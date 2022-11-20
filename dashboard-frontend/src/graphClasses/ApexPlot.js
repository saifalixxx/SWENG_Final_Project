import React from 'react'
import ReactApexChart from 'react-apexcharts';

const ApexPlot = ({ data, dLabels }) => {
    const series = [{
        name: "Commits",
        data: data
    }]
    const options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Commits Per Day',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: dLabels,
        }
    }
    return (
        <ReactApexChart options={options} series={series} type="line" height={350} />
  )
}

export default ApexPlot