import React from 'react'
import ReactApexChart from 'react-apexcharts';

const ApexPlot = ({ data, dLabels }) => {
    const series = [{
        name: "Commits",
        data: data
    },
    {
        name: "Average",
        data: [5,5,5,5,5,5,5,5,5,5,5]
      },]
    const options = {
        chart: {
            height: 350,
            type: 'line',
            background: '#2E2D2D',
            foreColor: 'white',
            zoom: {
                enabled: false
            }
        },
        fill: {
            type: "gradient",
            type: "gradient2",
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
            },
            gradient2: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [
                  {
                    offset: 20,
                    color: "#0099ff",
                    opacity: 1
                  }, {
                    offset: 40,
                    color: "#66c2ff",
                    opacity: 1
                  },
                  {
                    offset: 90,
                    color: "#e6f5ff",
                    opacity: 1
                  },
                ]
          }
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [0],
          formatter: function (val) {
            if(val > 6) {
            return 'Burnout alert';
            }
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#FA1109"],
            width: 50
        },
    },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Commits Per Week',
            align: 'left'
        },
        legend: {
           
                tooltipHoverFormatter: function(val, opts) {
                  return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''

                
        }
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