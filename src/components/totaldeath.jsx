import React from "react";
const Totaldeath = (props) => {
    const numberFormat = new Intl.NumberFormat();
    return(
        <React.Fragment>
            <div className="card text-left" style={{borderBottom:'5px solid red'}}>
              <div className="card-body">
                <h4 className="card-title">
                Total Deaths:  {numberFormat.format(props.death)}
                </h4>

              </div>
            </div>
        </React.Fragment>
    )
}
export default Totaldeath;