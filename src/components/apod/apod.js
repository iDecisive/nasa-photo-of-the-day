import React from "react";
import "./apod.css";

//Component(s)

import Details from "./details/details";

const Apod = props => {

    //console.log(data)

    return (
        
        <div className="apod">

            <img src={props.data}/> {/*src={props.data.src ??? */}

        <Details />

        </div>

    );

}

export default Apod;