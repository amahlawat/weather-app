import React, {Component } from 'react';
import './UserForm.css';

const UserForm = (props) => (
    <div className="weather-app-user-form">
        <form onSubmit={props.userFormData}>
            <input type="text" name="city" placeholder="Enter city" /><br/>
            <input type="text" name="country" placeholder="Enter country" /><br/>
            <button>Get Weather</button>
        </form>
    </div>
)

export default UserForm;