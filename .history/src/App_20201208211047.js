import './App.css';
import ChartDataSource from 'chartjs-plugin-datasource';
import {Bar} from "react-chartjs-2"

const DARK_BLUE = "#073b4c"
const PINK = "#ef476f"
const YELLOW = "#ffd166"
const GREEN = "#06d6a0"
const LIGHT_BLUE = "#118ab2"

const mainStyle = {
  margin: 0,
  backgroundColor: DARK_BLUE,
  width: "100vw",
  height: "100vh",
  display: 'flex'
}

const data1Container = {
  display: 'flex',
  width: '100vw',
  height: '100vh'
}

const data1DataContainer = {
  flexGrow: 1,
  borderRadius: '4px',
  borderColor: LIGHT_BLUE
}

const data1TextContainer = {
  backgroundColor: LIGHT_BLUE,
  flexGrow: 1,
  textAlign: "center",
  alignItems: "center"
}

const data1Data = {
  labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
  datasets:[
    {
      label:'Population',
      data:[
        617594,
        181045,
        153060,
        106519,
        105162,
        95072
      ],
      backgroundColor:[
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ]
    }
  ]
}

const chart1Options = {
  datasource: {
    url: "./datasets/regional-global-daily-latest.csv"
  }
}

function App() {
  return (
    <div className="App" style={mainStyle}>
      <div style={data1Container}>
        <div style={data1DataContainer}>
          <Bar plugins={ChartDataSource} options={chart1Options}></Bar>
        </div>
        <div style={data1TextContainer}>
          <p>Analysis description here</p>
        </div>
      </div>
    </div>
  );
}

export default App;
