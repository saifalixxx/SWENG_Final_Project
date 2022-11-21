import React from 'react'
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({ data, dLabels }) => {

  const options = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: dLabels,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'top'
        }
      }
    }]
  }


  return (
    <div id="chart">
      <ReactApexChart options={options} series={data} type="pie" width={380} />
    </div>
  )
}

export default ApexChart