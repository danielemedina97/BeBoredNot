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
 
  let getQuery = async (queryURL) => {
    setLoading(true);
    const response = await fetch(queryURL)
    const data =  await response.json();
    console.log(data);
    const item = data;
    console.log(item);
    setQueryData(item);
    setLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMadeQuery(true);
    let queryURL = "http://www.boredapi.com/api/activity/";
    let values = Array.from(document.getElementsByClassName("activity"));
    let isEmpty = true;
    for(let i in values){
      if(values[i].value !== ""){
        if(isEmpty){
          isEmpty = false;
          queryURL = queryURL.slice(0, -1);
          queryURL = queryURL + "?";
        }
        queryURL = queryURL + values[i].id +  '=' + values[i].value;
      }
    }
    //console.log(queryURL);
    getQuery(queryURL);

  };

  return (
    <div className="App">
      <div className="app-body">
        <Navbar/>
        <ActivityForm handleSubmit = {handleSubmit}/>
        {!madeQuery ? <div> Your suggestion here: </div> : loading ? <div>Loading...</div>:<Results queryData={queryData}/>}
        {/*loading  && madeQuery? <div>Loading...</div>:<Results queryData={queryData}/>*/}
      </div>
    </div>
  );
}

export default App;
