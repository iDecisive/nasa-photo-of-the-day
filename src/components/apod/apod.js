import React from "react";
//import "./apod.css";
import styled from 'styled-components';

//Component(s)

import Details from "./details/details";

const Apod = props => {

    //Styles
    let ApodImg = styled.img`
    
    height: 200px;
    max-width: 1000px;

    `;

    return (
        
        <div className="apod">

            <ApodImg src={props.data.url}/>

        <Details data={props.data} />

        </div>

    );

}

export default Apod;