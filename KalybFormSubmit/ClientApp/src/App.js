import React, { Component, useState } from 'react';
import './custom.css';
import axios from 'axios';
import qs from 'qs';

export default class App extends Component {
    static displayName = App.name;

    state = {
        input: 'initialValue'
    }

    handleInput = (event) => {
        this.setState({input: event.target.value})
    }
    submitButton = (event) => {
        event.preventDefault();
        var formPayload = new FormData();

        const service = axios.create({ baseUrl: "https://localhost:7015/" });
        const data = this.state.input;
        formPayload.append("form", data.toString());
        console.log("formPayload: ", formPayload.values);

        service.post(
            "/form", formPayload
        )
            .then((response) => {
                console.log("post response ", response);
            }).catch((error) => {
                console.log("error: ", error.config.data);
            });
        alert("click");
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitButton}>
                    <label>
                        <input type="text" onChange={this.handleInput} />
                    </label>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        );
  }
}
