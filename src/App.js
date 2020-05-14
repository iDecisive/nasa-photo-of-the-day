import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";


//Component(s)
import "./components/apod/apod";
import Apod from "./components/apod/apod";


function App() { //top level component

  let currentkey = "MGDgkRo5B3yaC73BOeuMndDxnhvnlpRkTMYHsgKD";

  let targetdate = "2017-03-25"; //YYYY-MM-DD

  let targetdate2 = "2017-03-26"; //YYYY-MM-DD

  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(_ =>{

    axios.get("https://api.nasa.gov/planetary/apod?api_key=" + currentkey + "&date=" + targetdate)
    .then(response => {
      setData(response.data)
    })
    .catch(err => console.error(err))

    axios.get("https://api.nasa.gov/planetary/apod?api_key=" + currentkey + "&date=" + targetdate2)
    .then(response => {
      setData2(response.data)
    })
    .catch(err => console.error(err))

  },[]);

  if(!data){

    return <h2>Waiting for data...</h2>

  }

  if(!data2){

    return <h2>Waiting for data 2...</h2>

  }

  //console.log(data)

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>

    <section id="image-section">
      <Apod data={data}/>
      <Apod data={data2}/>
    </section>

    </div>
  );
}

export default App;
