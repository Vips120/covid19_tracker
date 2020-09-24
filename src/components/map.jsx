import Axios from "axios";
import React, { useState,useEffect } from "react";
import ReactMapGL from "react-map-gl";
import axios from "axios";
import Marker from "./markers";
const Map = () => {
    const [state, setState] = useState(null);
    const [viewPort, setViewPort] = useState({
        width:'100%',
        height:600,
        latitude:0,
        longitude:0,
        zoom:2
    });
const onViewportChange = viewPort => setViewPort({...viewPort, transitionDuration:3000});
const token = "pk.eyJ1IjoidmlwczEyMDEiLCJhIjoiY2tld25wamttMGhtZjMxbjQ4ankwM2tndSJ9.QwN7IhrMIt_a2IvwpUg5nA";

useEffect(() => {
    const items = async () => {
        try {
            let response = await axios.get('https://covid19.mathdro.id/api/recovered');
            setState(response.data);
        }
        catch(error) {
            console.log(error.message);
        }

    }
    items();
}, []);

return (
    <React.Fragment>

        <div>
           <ReactMapGL
             {...viewPort}
             transitionDuration = {1000}
             mapboxApiAccessToken={token}
             mapStyle="mapbox://styles/mapbox/streets-v11"
             onViewportChange={viewPort => setViewPort(viewPort)}
           >
             {
                 !state ?
                  null :
               <Marker data={state}/>

             }  
               
               </ReactMapGL> 
        </div>
    </React.Fragment>
)



}

export default Map;