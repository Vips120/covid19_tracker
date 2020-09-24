import React from "react"
import Tracker from "./tracker";
const Marker = ({data}) => {
    // console.log(props);
    if(!data) {return null}
    return (
        data.map(item => <Tracker  key={item.uid} i={item}/>)
    )
}

export default Marker;