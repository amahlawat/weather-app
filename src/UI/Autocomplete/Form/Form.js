import React from 'react';

const form = (props) => {
    return(
        <React.Fragment>
            <div className="autocomplete" style={{"paddingTop":"20px"}}>
            <input id="cityName" type="text" name="myCity" placeholder="City" />
            </div><br />
            <div style={{"paddingTop":"20px"}}>
                <button onClick={() => props.formData()} >Check Weather</button>            
            </div>
        </React.Fragment>

)}

export default form;