import React, { Component } from 'react';
import Axios from './axios';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        }
    }
    api = async () => {
        let emailObj = {
            email: this.state.email
        }
        console.log(emailObj);
        let response = await Axios.post('/register', emailObj);
        console.log(response);
        if (response.status == 200) {
            console.log(response);
        }

    }
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center mt-5">
                    <input type="text" className="form-control col-sm-4" value={this.state.email} onChange={(event) => this.setState({ ...this.state, email: event.target.value })} placeholder="Enter the Email"></input>
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <button onClick={this.api} type="button" className="btn btn-primary">submit</button>
                </div>
            </div>
        );
    }
}

export default Register;