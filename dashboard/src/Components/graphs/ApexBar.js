import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

export const ApexBar = ({data, dLabels}) => {
 
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      background: '#2E2D2D',
      border: 'black',
      foreColor: 'white',
      
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 5,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5
    
    },
    title: {
      text: 'Work Breakdown',
      floating: true,
      offsetY: -3,
      align: 'center',
      style: {
        color: '#fff'
      }
    },
    plotOptions: {
      
      bar: {
        borderRadius: 4,
        outline: 4,
        horizontal: true,
        width: 100,
       
       
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
            color: "#0099ff",
            opacity: 1
          },
          {
            offset: 20,
            color: "#e6f5ff",
            opacity: 1
          },
          {
            offset: 60,
            color: "#61DBC3",
            opacity: 1
          },
          {
            offset: 100,
            color: "#95DA74",
            opacity: 1
          }
        ]
      }
      
    },
    dataLabels: {
      enabled: true,
                textAnchor: 'start',
                style: {
                  colors: ['#fff']
                },
                
                
    },

    xaxis: {
      categories: dLabels,
      max:100
      
    },
    legend: {
      borderWidth: 100,
      position: 'bottom',
      
    }
  }
  const series = [{
    data:data 
    
  }]



  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} width={900} border={'white'}/>
    </div>
  )
}
export default ApexBar;