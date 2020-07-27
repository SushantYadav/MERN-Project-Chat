import React, { Component } from 'react';
import axios from 'axios';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tweet: ""
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async submitHandler(e) {
        e.preventDefault();
        const { tweet, name } = this.state;

        const body = {
            tweet: tweet,
            name: name
        };

        const config = {
            headers: {
                'Content-Type': "application/json"
            }
        };
        try {
            await axios.post("/api/post", body, config);
            window.location.reload(false);

        } catch (err) {
            console.log(err);
        };
    };

    render() {
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="name" placeholder="Enter name" onChange={this.changeHandler} required />
                    <input type="text" name="name" placeholder="Tweet" onChange={this.changeHandler} required />
                    <input type="submit" />
                </form>
            </>
        )
    }
}

export default Form;