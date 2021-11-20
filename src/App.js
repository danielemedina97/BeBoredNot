import { getSuggestedQuery } from '@testing-library/dom';
import './App.css';
import Navbar from './resources/components/navbar/Navbar';
import ActivityForm from './resources/components/activity-form/ActivityForm';
import Results from './resources/components/results/Results';

function App() {
  


  var data = fetch('http://www.boredapi.com/api/activity/')
  .then(response => response.json())
.then(data=>console.log(data)).catch(error=>console.log("Error: " + error));

let getQuery = async (queryURL) => {
  let data = await fetch(queryURL)
  data =  await data.json();
  console.log(data);
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
