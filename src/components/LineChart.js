import React from 'react';
import reactDom from 'react-dom';
import Chart from "react-apexcharts";

class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartDates: [
                "1970-01-01",
                "1970-01-02",
                "1970-01-03",
                "1970-01-04",
                "1970-01-05",
                "1970-01-06",
                "1970-01-07",
                "1970-01-08",
                "1970-01-09",
                "1970-01-10"
            ],
            chartData: [
                {
                  name: "EXP",
                  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                  name: "SPM",
                  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                  name: "CDS",
                  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                  name: "SP",
                  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                  name: "SA",
                  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                  name: "BBUS",
                  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                  name: "SUF",
                  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                  name: "HAC",
                  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
            ]
        };

        this.getDates = this.getDates.bind(this);
        this.getData = this.getData.bind(this);
        this.sortData = this.sortData.bind(this);
    }
    
    getDates() {
        let dateList = [];
        for (let i = -2; i < 8; i++) {
            let date = new Date(new Date().getTime() + (i * 86400 * 1000));
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();

            dateList.push(
                year + "-" + 
                (month < 10 ? "0" + month : month) + "-" + 
                (day < 10 ? "0" + day : day)
            )
        }
        this.setState({ chartDates: dateList });
    }
    
    getData(file, id) {
        let sortData = this.sortData;
        fetch('./StockData/' + file + '.json'
        ,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
            .then(function(response){
                return response.json();
            })
            .then(function(myJson) {
                sortData(myJson, id);
            });
    }

    sortData(data, id) {
        console.log("A");
        let prices = [];

        // Get the date of 2 days ago
        let twodaysago = new Date(new Date().getTime() - (86400 * 2000));
        let year = twodaysago.getFullYear();
        let month = twodaysago.getMonth() + 1;
        month = month < 10 ? "0" + month : month;
        let day = twodaysago.getDate();
        day = day < 10 ? "0" + day : day;

        let dateStr = year + "-" + month + "-" + day;

        // Search dates until you find the one that matches
        let index = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i][2] == dateStr) {
                index = i;
                break;
            }
        }
        
        // Get the information from the dates
        for (let i = index; i < index + 10; i++)
        {
            prices.push(data[i][1])
        }

        let newChartData = this.state.chartData;
        newChartData[id].data = prices;
        this.setState({ chartData: newChartData });
    };
    
    componentDidMount() {
        this.getDates();
        this.getData("EXP_XOM", 0);
        this.getData("SPM_WMT", 1);
        this.getData("CDS_CVS", 2);
        this.getData("SP_BBY", 3);
        this.getData("SA_NKE", 4);
        this.getData("BBUS_BAC", 5);
        this.getData("SUF_AAL", 6);
        this.getData("HAC_F", 7);
    };
    
    render() {
        return <div className="chart-container">
            <Chart
                options={{
                    chart: {
                        id: "prices"
                    },
                    xaxis: {
                        categories: this.state.chartDates
                    },
                    colors: [
                        '#1A197B', // EXP
                        '#20BECC', // SPM
                        '#D1231C', // CDS
                        '#E3831C', // SP
                        '#233039', // SA
                        '#2622DD', // BBUS
                        '#C95C97', // SUF
                        '#016301' // HAC
                    ]
                }}
                series={this.state.chartData}
                type="line"
                width="100%"
                height="500px"
            />
        </div>
    }
}

export default LineChart;