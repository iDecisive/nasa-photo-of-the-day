import React from "react";
import "./apod.css";

//Component(s)

import details from "./details/details";

const apod = (data) => {

    console.log(data)

    return (
        
        <div class="apod">

        {details()}

        </div>

    );

}

export default apod;