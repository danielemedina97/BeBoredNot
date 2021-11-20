//import { getSuggestedQuery } from '@testing-library/dom';
import './App.css';
import Navbar from './resources/components/navbar/Navbar';
import ActivityForm from './resources/components/activity-form/ActivityForm';
import Results from './resources/components/results/Results';
import { useState, useEffect, useRef } from 'react';

function App() {
  


  var data = null;

  const [queryData, setQueryData] = useState(null);

  const isMounted = useRef(false);
  
  useEffect(() => {
    if(isMounted.current){
    console.log("Hello World");
    } else {
      isMounted.current = true;
    }
  }, [queryData]);
  

let getQuery = async (queryURL) => {
  data = await fetch(queryURL)
  data =  await data.json();
  console.log(data);
  setQueryData(data);
}

  const handleSubmit = (e) => {
    e.preventDefault();
    let queryURL = "http://www.boredapi.com/api/activity/";
    let values = Array.from(document.getElementsByClassName("activity"));
    let isEmpty = true;
    let name ="hello";
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
    console.log(queryURL);
    getQuery(queryURL);

  };


  return (
    <div className="App">
      
      <div className="app-body">
        <Navbar/>

        <ActivityForm handleSubmit = {handleSubmit}/>

        <Results/>
      </div>

      
    
    </div>
  );
}

export default App;
