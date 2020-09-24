
import React, {useState,useEffect,useRef} from "react";
import axios from "axios";
import Country from "./country";
const Search = () => {
    const [search,setSearch] = useState('');
    const [state,setState] = useState(null);
    const timeOut = useRef(null);

    const fetchSearchData = async(search) => {
        if(search) {
            let response = await axios.get(`https://covid19.mathdro.id/api/countries/${search}`);
            setTimeout(() => {
                setState(response.data);
            },1000);
        } else {
            let response = await axios.get(`https://covid19.mathdro.id/api/countries/india`);
            setTimeout(() => {
                setState(response.data);
            },1000);
        }
    };

const searchData = (event) => {
    const {value} = event.target;
    clearTimeout(timeOut.current);
    setSearch(value);
    timeOut.current = setTimeout(() => fetchSearchData(value), 1000);
}

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="search" className="form-control" placeholder="search country" 
                              value={search}
                              onChange={searchData}
                              onSubmit = {() => fetchSearchData(search)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {
                            state ?  <Country items={state} countrySearch={search}/> : null
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Search;