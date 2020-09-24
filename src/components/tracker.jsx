import React from "react";
import {Marker} from "react-map-gl";
import marker from "../images/marker.png";

const Tracker = ({i}) => {
    // console.log(props);
    if(!i){return null;}
    if(i.lat === null && i.long === null){return null};
    return(
        <Marker latitude={i.lat} longitude={i.long} offsetLeft={-20} offsetTop={-10}>
<img src={marker} width={15}/>
        </Marker>
    )
}

export default Tracker;