import React from 'react'
import ReactApexChart from 'react-apexcharts';

const VertBar = ({ data, dLabels }) => {

      const series = [{
        name: 'Active Days per week',
        data: data
      }]

      const options = {
        chart: {
          height: 300,
          width: 100,
          type: 'bar',
          background: '#2E2D2D',
          foreColor: 'white',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'bottom', // top, center, bottom
            },
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
          enabled: true,
          formatter: function (val) {
            return val;
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#fff"],
            width: 50
          },

        },

        xaxis: {
          categories: dLabels,
          position: 'bottom',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },

          tooltip: {
            enabled: true,
          }
        },
       yaxis: {
          categories: ['0','1','2','3','4','5','6','7'],
          
        /*  labels: {
            show: true,
            color: 'black',
            formatter: function (val) {
              return val + " / 7";
            }
          } */

        }, 
        title: {
          text: 'Active Days / Week',
          floating: true,
          offsetY: 0,
          align: 'center',
          style: {
            color: '#fff'
          }
        }
      }


   



    return (


      <div id="bar">
        <ReactApexChart options={options} series={series} type='bar' height={350} width={700}  />
      </div>
    )
  }

export default VertBar;