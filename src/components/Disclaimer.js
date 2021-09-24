import { React, useState } from 'react';
import reactDom from 'react-dom';

function Disclaimer(props) {

    const [ active, setActive ] = useState(true);

    return <div className={"disclaimer " + (active ? "" : "hidden")}>
        <div>
            <h1>Disclaimer</h1>
            <p>The purpose of Stukent's stock market is to teach students how the stock market works IRL. Obviously, in real life, there's no handy-dandy website you can head to to check with almost perfect accuracy exactly how stocks are going to do over the next week.</p>
            <p>So while this website is certainly useful, it's important to remember that you shouldn't rely on it entirely to get through the class.</p>
            <button onClick={()=>setActive(false)}>ACKNOWLEDGE</button>
        </div>
    </div>
};

export default Disclaimer;