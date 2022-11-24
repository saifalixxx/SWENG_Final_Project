import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

export const ApexBar = ({data, dLabels}) => {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },

    xaxis: {
      categories: dLabels,
    },
    legend: {
      position: 'bottom'
    }
  }
  const series = [{
    data:data //hardcoded for now - need to put pur own data in
  }]



  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  )
}

// class ApexBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {

//       series: [{
//         data: [70, 20, 10] //hardcoded for now - need to put pur own data in
//       }],
//       options: {
//         chart: {
//           type: 'bar',
//           height: 350
//         },
//         plotOptions: {
//           bar: {
//             borderRadius: 4,
//             horizontal: true,
//           }
//         },
//         dataLabels: {
//           enabled: false
//         },

//         xaxis: {
//           categories: ['New Work', 'Refactor', 'Rework'
//           ],
//         },
//         legend: {
//           position: 'bottom'
//         }
//       },


//     };
//   }



//   render() {
//     return (
//       <div id="chart">
//         <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
//       </div>
//     );
//   }
// }

export default ApexBar;