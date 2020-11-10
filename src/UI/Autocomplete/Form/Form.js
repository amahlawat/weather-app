import React, { useState } from 'react';
import './Form.css';

function form(props){
    const [cityName, setCityName] = useState('');
    const search = () => {
        console.log(" search ", cityName)
        props.formData(document.getElementById("cityName").value);
        document.getElementById("cityName").value = "";
        setCityName("");
    }

    return(
        <React.Fragment>
            <div className="autocomplete form-main">
                <input id="cityName" onChange={event => setCityName(event.target.value)} type="text" name="myCity" placeholder="City" />
                <button onClick={search} id="button-check" className={`button-check ${cityName === "" ? "button-disabled": "button-active"}`}>Check Weather</button>            
            </div>
        </React.Fragment>

)}

export default form;