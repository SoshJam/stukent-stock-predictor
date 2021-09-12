import { React, useEffect, useState } from 'react';

function StockTableRow(props) {
    const [priceData, setPriceData] = useState([
        ["1970-01-01","0.00"],
        ["1970-01-01","0.00"],
        ["1970-01-01","0.00"],
        ["1970-01-01","0.00"],
        ["1970-01-01","0.00"],
        ["1970-01-01","0.00"],
        ["1970-01-01","0.00"],
        ["1970-01-01","0.00"],
        ["1970-01-01","0.00"],
        ["1970-01-01","0.00"]
    ]);
    const [changeData, setChangeData] = useState([
        ["0.00"],
        ["0.00"],
        ["0.00"],
        ["0.00"],
        ["0.00"],
        ["0.00"],
        ["0.00"],
        ["0.00"],
        ["0.00"],
        ["0.00"],
        ["0.00"]
    ])

    const getData=()=>{
        fetch('./StockData/' + props.name + '.json'
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
                sortData(myJson);
            });
    }

    const sortData = (data) => {
        let finalData = [];

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
            finalData.push(data[i])
        }

        // Get percent change between days
        for (let i = 1; i < 10; i++) {
            let priceBefore = parseFloat(finalData[i-1][1]);
            let priceNow = parseFloat(finalData[i][1])
            let priceChange = (((priceNow / priceBefore) - 1) * 100).toFixed(2);
            let newChangeData = changeData;
            newChangeData[i] = priceChange;
            setPriceData(newChangeData);
        }

        setPriceData(finalData);
        console.log();
    }

    const setSubTitle = (id, showPercent) => {
        if (props.u) {
            let targetCellId = "cell" + props.name + id + "sub";
            if (showPercent) {
                document.getElementById(targetCellId).innerHTML = (
                    changeData[id] >= 0 ?
                        "+" + changeData[id] :
                        changeData[id]
                    ) + "%";
                document.getElementById(targetCellId).className = "subtitle " + (
                    changeData[id] >= 0 ?
                        "change-positive" :
                        "change-negative"
                    );
            } else {
                document.getElementById(targetCellId).innerHTML = priceData[id][0];
                document.getElementById(targetCellId).className = "subtitle";
            }
        }
    }

    const printCols = (num) => {
        let cols;

        for (let i = 1; i < num + 1; i++) {
            let elem = <td
                onMouseEnter={()=>setSubTitle(i,true)}
                onMouseLeave={()=>setSubTitle(i,false)}
            >
                ${priceData[i][1]}<br/>
                <span className='subtitle' id={"cell" + props.name + i + "sub"}>
                    {priceData[i][0]}
                </span>
            </td>;
            cols = [cols, elem];
        }

        return cols;
    }

    useEffect(() => {
        getData();
    },[]);

    return <tr>
        <th className="first-column">
            <h2>{props.company}</h2>
            <span className='subtitle'>IRL: {props.irl}</span>
        </th>

        <td>
            ${priceData[0][1]}<br/>
            <span className='subtitle'>{priceData[0][0]}</span>
        </td>

        {printCols(9)}
    </tr>;
}

export default StockTableRow;