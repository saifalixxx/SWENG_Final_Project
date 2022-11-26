import React from 'react'
import ReactApexChart from 'react-apexcharts';
class VertBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Lines added',
        data: [3, 14, 1, 1, 4, 4, 1, 1, 1]
      },
      { name: 'Lines deleted' ,
      data: [1, 10, 5, 3, 14, 2, 5, 5, 9]
    }],
      options: {
        chart: {
          height: 300,
          width: 100,
          type: 'bar',
          background: '#262626',
          foreColor: 'white',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
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
          categories: ["Andrew Chow", "MacroFake", "Ryan Ofsky", "Hennadii Stepanov", "Sebastian Falbesoner", "fanquake", "James O'Beirne", "Martin Zumsande", "Sjors Provoost"],
          position: 'top',
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
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            color: 'black',
            formatter: function (val) {
              return val + " commit(s) today";
            }
          }

        },
        title: {
          text: 'Title',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
      },


    };
  }



  render() {
    return (


      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} width={700} />
      </div>
    )
  }
}
export default VertBar;