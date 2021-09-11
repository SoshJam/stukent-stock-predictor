import { React, useEffect, useState } from 'react';

function StockTableRow(props) {
    const defaultPriceData = [
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
    ]
    const [priceData, setPriceData] = useState(defaultPriceData);

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

        setPriceData(finalData);
        console.log();
    }

    useEffect(() => {
        getData();
    },[]);

    return <tr>
        <th>
            <h2>{props.company}</h2>
            <span class='subtitle'>IRL: {props.irl}</span>
        </th>

        <td>
            ${priceData[0][1]}<br/>
            <span class='subtitle'>{priceData[0][0]}</span>
        </td>

        <td>
            ${priceData[1][1]}<br/>
            <span class='subtitle'>{priceData[1][0]}</span>
        </td>

        <td>
            ${priceData[2][1]}<br/>
            <span class='subtitle'>{priceData[2][0]}</span>
        </td>

        <td>
            ${priceData[3][1]}<br/>
            <span class='subtitle'>{priceData[3][0]}</span>
        </td>

        <td>
            ${priceData[4][1]}<br/>
            <span class='subtitle'>{priceData[4][0]}</span>
        </td>

        <td>
            ${priceData[5][1]}<br/>
            <span class='subtitle'>{priceData[5][0]}</span>
        </td>

        <td>
            ${priceData[6][1]}<br/>
            <span class='subtitle'>{priceData[6][0]}</span>
        </td>

        <td>
            ${priceData[7][1]}<br/>
            <span class='subtitle'>{priceData[7][0]}</span>
        </td>

        <td>
            ${priceData[8][1]}<br/>
            <span class='subtitle'>{priceData[8][0]}</span>
        </td>

        <td>
            ${priceData[9][1]}<br/>
            <span class='subtitle'>{priceData[9][0]}</span>
        </td>
    </tr>
}

export default StockTableRow;