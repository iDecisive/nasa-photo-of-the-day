import React, {useEffect, useState} from "react";
import axios from "axios";
//import "./App.css";
import styled from 'styled-components';


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

  console.log(data)

  //Styles using styled-components

  let AppDiv = styled.div`
  
  text-align: center;
  display:flex;
  flex-direction: column;
  align-items: center;

  `;

  let ImageSection = styled.section`
  
  width: 1000px;
  text-align: left;

  `;


  return (
    <AppDiv className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>

    <ImageSection id="image-section">
      <Apod data={data}/>
      <Apod data={data2}/>
    </ImageSection>

    </AppDiv>
  );
}

export default App;
