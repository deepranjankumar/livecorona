import React,{useState,useEffect}from 'react';
import './index.css'
const App=()=>{
const [value,setValue]=useState([]);

const getUpdate=async()=>{
const data=await fetch('https://data.covid19india.org/data.json');
const extractData= await data.json();
const state=extractData.statewise;
setValue(state);
}

useEffect(()=>{
  getUpdate();
},[])
  return(
  <>
  <p className="heading"> <span style={{fontWeight:'bold'}}>INDIA</span> {"  "} COVID-19 Dashboard</p>
<div className="container">
 <table className="table">
  <thead className="head">
  <tr className="navbar">
    <th style={{ textAlign: 'left',margin:'0px'}}>STATE</th>
    <th>CONFERMED</th>
    <th>RECOVERED</th>
    <th>DEATHS</th>
    <th>ACTIVE</th>
    <th>UPDATED</th>
    </tr>
  </thead>
  <tbody className="table-body">
  {value.map((ele,ind)=>{
    return(<>
    <tr key={ind} className="hover">
    <td style={{ textAlign: 'left'}} >{ele.state}</td>
    <td className="hovers">{ele.confirmed}</td>
    <td className="hovers">{ele.deltarecovered
}</td>
    <td className="hovers">{ele.deltadeaths}</td>
    <td className="hovers">{ele.active}</td>
    <td className="hovers">{ele.lastupdatedtime}</td>
    </tr>
    </>)
  })}
   
    
  </tbody>
 </table>
   
 </div>
  </>
  )
}

export default App;