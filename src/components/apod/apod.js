import React from "react";
//import "./apod.css";
import styled from 'styled-components';

//Component(s)

import Details from "./details/details";

const Apod = props => {

    //Styles

    let ApodDiv = styled.div`
    
    display:flex;
    margin-bottom: 20px;
    border: 1px solid black;

    `;

    let ApodImg = styled.img`
    
    height: 275px;
    max-width: 1000px;

    `;


    return (
        
        <ApodDiv className="apod">

            <ApodImg src={props.data.url}/>

        <Details data={props.data} />

        </ApodDiv>

    );

}

export default Apod;