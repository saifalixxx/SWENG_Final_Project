import React from 'react'
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({ data, dLabels }) => {

  const options = {

    chart: {
      title: "Commits per Day",
      type: 'pie',
      background: '#2E2D2D',
      foreColor: 'white',
    },
    colors: ['#e600e6', '#33ccff', '#e6f5ff', '#ffccff', '#61DBC3'],
    fill: {
      type: 'colors',

    },
    labels: dLabels,
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'top'
        },


      }
    }]
  }


  return (
    <div id="chart">
      <ReactApexChart options={options} series={data} type="pie" width={500} />
    </div>
  )
}

export default ApexChart