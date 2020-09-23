import React, {useState, useEffect} from "react";
import axios from "axios";
import TotalCases from "./totalcases";
import Recovered from "./recovered";
import Totaldeath from "./totaldeath"; 


const Header = () => {

  const [totalCases, setTotalCase] = useState("");
  const [recorvered, setRecovered] = useState("");
  const [totalDeath, setTotalDeath] = useState("");

useEffect(()=> {
    let data = async () => {
        let response = await axios.get('https://covid19.mathdro.id/api');
         //console.log(response);
        setTotalCase(response.data.confirmed.value);
        setRecovered(response.data.recovered.value);
        setTotalDeath(response.data.deaths.value);
    }
    data();
},[totalCases]);


  return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <TotalCases cases={totalCases} />
                </div>
                <div className="col-md-3">
                <Recovered  recover={recorvered}/>
                </div>
                <div className="col-md-3">
 <Totaldeath death={totalDeath} />
                </div>
            </div>
        </div>
    </React.Fragment>
  )

}

export default Header;