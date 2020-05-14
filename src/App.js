import React from "react";
import axios from "axios";
import "./App.css";


//Component(s)
import "./components/apod/apod";
import apod from "./components/apod/apod";


function App() { //top level component

  let currentkey = "MGDgkRo5B3yaC73BOeuMndDxnhvnlpRkTMYHsgKD";

  let targetdate = "2017-03-25"; //YYYY-MM-DD

  let getData = (apikey, date) =>{ 

    return axios.get("https://api.nasa.gov/planetary/apod?api_key=" + apikey + "&date=" + date)
    .then(response => {
  
      return response.data;

    })
  .catch()
}


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>

    <section id="image-section">
      {apod(getData(currentkey, targetdate))}
    </section>

    </div>
  );
}

export default App;
