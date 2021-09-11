import { React, useEffect, useState } from 'react';

function DateDisplay(props) {

    const [dateStr, setDateStr] = useState("");
    const monthnames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const getDate = () => {
        let timestamp = new Date().getTime() + (props.offset * 86400 * 1000);
        let date = new Date(timestamp);

        let month = date.getMonth();
        let day = date.getDate();

        setDateStr(monthnames[month] + " " + day);
    }

    useEffect(() => {
        getDate();
    },[]);

    return <th className={props.offset == 0 ? "today-th" : ""}>
        {dateStr}
    </th>
}

export default DateDisplay;