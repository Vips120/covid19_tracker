import React from "react";
const Recovered = (props) => {
    const numberFormat = new Intl.NumberFormat();
    return(
        <React.Fragment>
            <div className="card text-left" style={{borderBottom:'5px solid green'}}>
              <div className="card-body">
                <h4 className="card-title">
                Total Recovered:  {numberFormat.format(props.recover)}
                </h4>

              </div>
            </div>
        </React.Fragment>
    )
}
export default Recovered;