import React from "react";
import styled from "styled-components";
//import "./details.css";

const Details = props => {

    //Styles

    let DetailsDiv = styled.div`
    
    padding: 10px;
    background-color: #2c3e50;
    color: #ecf0f1;

    `;

    return (
        
        <DetailsDiv id="details">
        
            <span>

                {props.data.explanation}

            </span>

        </DetailsDiv>

    );

}

export default Details;