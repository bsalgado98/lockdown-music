import './App.css';
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
  height: "100vh"
}

const chart1Data = {
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

function App() {
  return (
    <div className="App" style={mainStyle}>
      <Bar data={chart1Data} height="50%" width="50%"></Bar>
    </div>
  );
}

export default App;
