import React, { Component } from 'react';
import Axios from './axios';
import Register from './Register';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        }
    }


    submit = async () => {
        console.log('uuuu')
        let formObj = {
            name: this.state.name,
        }
        console.log(formObj);

        let response = await Axios.post('/login', formObj);
        console.log(response);
        if (response.status == 200) {
            console.log(response);
        }

        // let response = await axios.post("http://localhost:3007/login", object);
        // console.log(response);
    }
    render() {
        return (
            <div>
                <Register></Register>
                <div className="d-flex justify-content-center mt-5">
                    <input type="text" className="form-control col-sm-4" value={this.state.name} onChange={(event) => this.setState({ ...this.state, name: event.target.value })} placeholder="Enter the Name"></input>
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <button onClick={this.submit} type="button" className="btn btn-primary">submit</button>
                </div>
            </div>
        );
    }
}

export default Form;