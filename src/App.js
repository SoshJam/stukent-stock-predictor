import './App.css';
import DateDisplay from './components/DateDisplay';
import StockTableRow from './components/StockTableRow';

function App() {

  const getDate = (dayOffset) => {
    const monthnames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date(new Date().getTime() + (86400 * 1000 * dayOffset));
    return monthnames[date.getMonth()] + " " + date.getDate();
  }

  return (
    <div className="App">

      <header>
        <h1>Stukent Stock Predictor</h1>
      </header>

      <main>
        {/* Line Chart will go here */}
        
        <h1>Stock Table</h1>

        <table class='stocktable'>
          <colgroup class="first-col"></colgroup>
          <colgroup span="2"></colgroup>
          <colgroup class="today-col"></colgroup>

          <thead>
            <tr>
              <th>Company</th>
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
            />
            
            <StockTableRow
              company="Supermart (SPM)"
              irl="Walmart Inc. (WMT)"
              name="SPM_WMT"
            />
            
            <StockTableRow
              company="Corner Drug Store, Inc. (CDS)"
              irl="CVS Health Services (CVS)"
              name="CDS_CVS"
            />
            
            <StockTableRow
              company="Superior Purchase (SP)*"
              irl="Best Buy Co., Inc. (BBY)"
              name="SP_BBY"
            />
            
            <StockTableRow
              company="Swoosh Athletics (SA)*"
              irl="Nike Inc. (NKE)"
              name="SA_NKE"
            />
            
            <StockTableRow
              company="Big Bank of US (BBUS)"
              irl="Bank of America Corp. (BAC)"
              name="BBUS_BAC"
            />
            
            <StockTableRow
              company="US Flights (SUF)"
              irl="American Airlines Group Inc. (AAL)"
              name="SUF_AAL"
            />
            
            <StockTableRow
              company="Hank Auto Co. (HAC)"
              irl="Ford Motor Company (F)"
              name="HAC_F"
            />
          </tbody>
        </table>
        <p class="tiny"><em>* For some reason, these stocks are always 2-3 cents off from the IRL price, so be warned. If there's ever a larger discrepancy please let me know.</em></p>

        <hr/>

        <h1>More Info</h1>

        <p>Welcome to Sam Hill's Stukent Stock Predictor! This is still a pretty rudimentary site because I made it in like 5 hours, but eventually it's going to be a lot better. Eventually I will be adding a line chart as well to more easily visualize the stocks.</p>

        <p>The listed share prices are the ones the market <strong>closes</strong> on on a given day. Stukent shows the closing prices from the day before. If you look at the graph there, it'll say {getDate(-1)} instead of {getDate(0)}. If it's confusing, you can think of it like "This is how much a share will be worth by midnight that night." You want to invest in the ones that will be worth the most soonest.</p>

        <p>Additionally, you may notice that some stocks are missing, namely MFCR, RWCIX, and MIH. I wasn't able to figure out what they meant, so if you can figure out please let me know and I'll add it to the site.</p>
        
        <p>Also, I've applied my incredible deduction skills to reach the conclusion that Run Fast Telecom (RFT) is indeed Sprint (shocker), but they merged with T-Mobile last year and so I can't find the correct data. I need everything from 9/1/08 to 9/1/18. One website has slightly inaccurate data and only goes back to Jul 2009. Another has correct data, but only allows you to look it up for one day at a time. If you can find anywhere with accurate data across the needed time frame that allows you to download it in bulk, please reach out to me.</p>

        <p>See the <a href="https://github.com/SoshJam/stukent-stock-predictor#readme" target="_blank" rel="noreferrer">Github README</a> for more information.</p>

      </main>

      <footer>
        Copyright &copy; {new Date().getFullYear()} Sam Hill
      </footer>

    </div>
  );
}

export default App;
