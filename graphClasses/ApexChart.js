import React from 'react'
import ReactApexChart from 'react-apexcharts';
class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 13, 43, 22],    //hardcoded for now - need to put pur own data in
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Java', 'Python', 'C', 'Haskell', 'JavaScript'],
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
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
</div>
      
      );
    }
  }
  export default ApexChart;