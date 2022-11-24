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
            background: '#262626',
            foreColor: 'white',
            zoom: {
                enabled: false
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [
                    {

                        offset: 0,
                        color: "#e600e6",
                        opacity: 1
                    },
                    {
                        offset: 20,
                        color: "#f006ff",
                        opacity: 1
                    },
                    {
                        offset: 60,
                        color: "#ff80ff",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: "#ffccff",
                        opacity: 1
                    },

                ]
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
                colors: ['transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: dLabels,
        }
    }
    return (
        <ReactApexChart options={options} series={series} type="line" height={350} width={700} />
    )
}

export default ApexPlot