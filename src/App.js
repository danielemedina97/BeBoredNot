//import { getSuggestedQuery } from '@testing-library/dom';
import './App.css';
import Navbar from './resources/components/navbar/Navbar';
import ActivityForm from './resources/components/activity-form/ActivityForm';
import Results from './resources/components/results/Results';
import { useState } from 'react';

function App() {
  
  const [queryData, setQueryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [madeQuery, setMadeQuery] = useState(false);
  const [foundResult, setFoundResult] = useState(false);
 
  let getQuery = async (queryURL) => {
    setLoading(true);
    const response = await fetch(queryURL)
    const data =  await response.json();
    if(data.error){
      setLoading(false);
      setFoundResult(false);
      console.log("No results");
    } else{
    setFoundResult(true);
    console.log(data);
    const item = data;
    console.log(item);
    setQueryData(item);
    setLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMadeQuery(true);
    var queryURL = "https://www.boredapi.com/api/activity/";
    var values = Array.from(document.getElementsByClassName("activity"));
    //let isEmptyQuery = true;//if empty, the query will be random.
    var numFields = 0;
    for(let i in values){
      if(values[i].value !== ""){
        numFields = numFields + 1;
        if(numFields === 1){
          queryURL = queryURL.slice(0, -1) + "?";
        }
        if(numFields > 1){
          queryURL = queryURL + '&&'
        }
        //if(isEmptyQuery){
          //isEmptyQuery = false;
          //queryURL = queryURL.slice(0, -1);
          queryURL = queryURL + values[i].id +  '=' + values[i].value;
        //}
        //queryURL = queryURL + values[i].id +  '=' + values[i].value;
      }
    }
    //console.log(queryURL);
    getQuery(queryURL);

  };

  return (
    <div className="App">
      <div className="app-body">
        <Navbar/>
        <div id="activity-form-border">
          <div id="activity-form-wrapper">
        <ActivityForm handleSubmit = {handleSubmit}/>
          </div>
        </div>
        <div id="results-section">
        {!madeQuery ? <div id="suggestion-here"> Your suggestion here: </div> : 
        loading ? <div id="loading">Loading...</div>: 
        !foundResult ? <div id="no-result">No Result Found</div> : 
        <div id="results-wrapper"><Results queryData={queryData}/> </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
