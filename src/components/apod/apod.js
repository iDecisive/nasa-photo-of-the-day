import React from "react";
import "./apod.css";

//Component(s)

import Details from "./details/details";

const Apod = props => {

    return (
        
        <div className="apod">

            <img src={props.data.url}/> {/*src={props.data.src ??? */}

        <Details />

        </div>

    );

}

export default Apod;