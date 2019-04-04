import React from 'react';

const information = (props) => {
    return(
        <div className="weather-app-information">
            <ol>
                <li>Humidity: {props.humidity}</li>
                <li>Pressure: {props.pressure}</li>
                <li>Temperature: {props.temperature}</li>
            </ol>
        </div>
    )
}

export default information;