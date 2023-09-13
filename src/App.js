import './css/App.css';
import Axios from 'axios';
import {useState} from 'react';
import TskBar from './tskbar';
function App() {
  const [object,setObj]=useState('');
  const [gender,setGen]=useState('');
  const [Year,setYear]=useState('');
  async function getData(){
    try {
      const data= await Axios.get('https://www.mockachino.com/5db99bd2-28c5-46/ipl/table')
      const obj=data.data.points
      setObj(obj)
    } catch (error) {
      console.log('Something went wrong '+error)
    }
  }


  return (
    <div className="App">
      <div className="taskbar">
        <TskBar/>
      </div>
      <div className="welcome-msg">
        <h1>We welcome you all to</h1>
        <h2>The Cloud Company's Placement Drive - September 2023 Chapter</h2>
      </div>
      <div className="dd">
        <div className="dropdown">
          <select onChange={(e)=>{getData();setGen(e.target.value);}} name="gender" id="gen">Gender
          <option value="">Gender</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          </select>
          {/* {
            console.log(gender)
          } */}
          <select onChange={(e)=>{setYear(e.target.value);}} name="year" id="year">Gender
          <option value="">Year</option>
          <option value='2020'>2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          </select>
        </div>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>L</th>
              <th>NR</th>
              <th>NRR</th>
              <th>FOR</th>
              <th>AGAINST</th>
              <th>PTS</th>
              <th>RECENT FORM</th>
            </tr>
            {/* {
              console.log(object)
            } */}
          </thead>
          {
            object && object.map((mapped)=>{
                if(mapped.Gender === gender && mapped.IPLYear===Number(Year))
                {
                  return(
                    <tbody>
                      <tr>
                        <td><img src={mapped.TeamLogo} alt="logo" /></td>
                        <td>{mapped.TeamCode}</td>
                        <td>{mapped.Points}</td>
                        <td>{mapped.Wins}</td>
                        <td>{mapped.Loss}</td>
                        <td>{mapped.NoResult}</td>
                        <td>{mapped.NetRunRate}</td>
                        <td>{mapped.ForTeams}</td>
                        <td>{mapped.AgainstTeam}</td>
                        <td>{mapped.Points}</td>
                        <td>{mapped.Performance}</td>
                      </tr>
                    </tbody>
                  );
                }
                return(null);
            })
          }
        </table>
      </div>
    </div>
  );
}

export default App;