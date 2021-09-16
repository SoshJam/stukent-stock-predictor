import { useState } from 'react';
import './App.css';
import DateDisplay from './components/DateDisplay';
import LineChart from './components/LineChart';
import StockTableRow from './components/StockTableRow';

function App() {

  const getDate = (dayOffset) => {
    const monthnames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date(new Date().getTime() + (86400 * 1000 * dayOffset));
    return monthnames[date.getMonth()] + " " + date.getDate();
  }

  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="App">

      <header>
        <h1>Stukent Stock Predictor</h1>
      </header>

      <main>
        <h1>Share Price Graph</h1>
        
        <LineChart />
        
        <h1>Share Price Table</h1>

        <table class='stocktable'>
          <colgroup class="first-col"></colgroup>
          <colgroup span="2"></colgroup>
          <colgroup class="today-col"></colgroup>

          <thead>
            <tr>
              <th class="th-highlight">Company</th>
              <DateDisplay offset="-2" />
              <DateDisplay offset="-1" />
              <DateDisplay offset="0" />
              <DateDisplay offset="1" />
              <DateDisplay offset="2" />
              <DateDisplay offset="3" />
              <DateDisplay offset="4" />
              <DateDisplay offset="5" />
              <DateDisplay offset="6" />
              <DateDisplay offset="7" />
            </tr>
          </thead>

          <tbody>
            <StockTableRow
              company="Exin Petrolium (EXP)"
              irl="Exxon Mobil Corp. (XOM)"
              name="EXP_XOM"
              ticker="EXP"
              u={unlocked}
            />
            
            <StockTableRow
              company="Supermart (SPM)"
              irl="Walmart Inc. (WMT)"
              name="SPM_WMT"
              ticker="SPM"
              u={unlocked}
            />
            
            <StockTableRow
              company="Corner Drug Store, Inc. (CDS)"
              irl="CVS Health Services (CVS)"
              name="CDS_CVS"
              ticker="CDS"
              u={unlocked}
            />
            
            <StockTableRow
              company="Superior Purchase (SP)*"
              irl="Best Buy Co., Inc. (BBY)"
              name="SP_BBY"
              ticker="SP"
              u={unlocked}
            />
            
            <StockTableRow
              company="Swoosh Athletics (SA)*"
              irl="Nike Inc. (NKE)"
              name="SA_NKE"
              ticker="SA"
              u={unlocked}
            />
            
            <StockTableRow
              company="Big Bank of US (BBUS)"
              irl="Bank of America Corp. (BAC)"
              name="BBUS_BAC"
              ticker="BBUS"
              u={unlocked}
            />
            
            <StockTableRow
              company="US Flights (SUF)"
              irl="American Airlines Group Inc. (AAL)"
              name="SUF_AAL"
              ticker="SUF"
              u={unlocked}
            />
            
            <StockTableRow
              company="Hank Auto Co. (HAC)"
              irl="Ford Motor Co. (F)"
              name="HAC_F"
              ticker="HAC"
              u={unlocked}
            />
          </tbody>
        </table>
        <p class="tiny"><em>* For some reason, these stocks are always 2-3 cents off from the IRL <span onClick={() => setUnlocked(!unlocked)}>price,</span> so be warned. If there's ever a larger discrepancy please let me know.</em></p>

        <hr/>

        <h1>More Info</h1>

        <p>Welcome to Sam Hill's Stukent Stock Predictor!</p>

        <p>The listed share prices are the ones the market <strong>closes</strong> on on a given day. Stukent shows the closing prices from the day before. (If you look at the graph on Stukent, it'll say {getDate(-1)} instead of {getDate(0)}.) If it's confusing, you can think of it like "This is how much a share was worth at midnight that night."</p>

        <p>Additionally, you may notice that some stocks are missing, namely MFCR, RWCIX, and MIH. I wasn't able to figure out what they meant, so if you can figure out please let me know and I'll add it to the site. Also, I've applied my incredible deduction skills to reach the conclusion that Run Fast Telecom (RFT) is indeed Sprint (shocker), but they merged with T-Mobile last year and so I can't find the correct data. I need everything from 9/1/08 to 9/1/18. One website has slightly inaccurate data and only goes back to Jul 2009. Another has correct data, but only allows you to look it up for one day at a time. If you can find anywhere with accurate data across the needed time frame that allows you to download it in bulk, please reach out to me.</p>

        <p>If you find any bugs, issues, or incorrect prices with a difference larger than 10 cents, please contact me to let me know. Additionally, if you have any suggestions for things you want added to the site, tell me and I'll consider putting it in. My email address is <a href="mailto:soshjam@soshjam.com">soshjam@soshjam.com</a></p>

        <p>See the <a href="https://github.com/SoshJam/stukent-stock-predictor" target="_blank" rel="noreferrer">Github repository</a> for more information.</p>

      </main>

      <footer>
        v1.2.0 - Copyright &copy; {new Date().getFullYear()} Sam Hill
      </footer>

    </div>
  );
}

export default App;
