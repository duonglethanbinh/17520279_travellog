import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Delete.css';
class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteid: ''
        };
    }
    handleChange = event => {
        this.setState({ deleteid: event.target.value });
    }
    deleteSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        console.log(this.state.deleteid);
        axios.delete(`https://travellog-7th-backend.herokuapp.com/blogs/${this.state.deleteid}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert('Delete completed. Click go back to move to Blog');
            })
    }
    render() {
        return (
            <div className="delete-box">
                <div className="card card-body delete-container">
                    <form onSubmit={this.deleteSubmit}>
                        <h5>Copy ID to input box for confirming delete:</h5>
                        <button className="btn btn-outline-secondary" type="button" onClick={() => navigator.clipboard.writeText(this.props.match.params.Pid)}>Copy</button>
                        <span><i>{this.props.match.params.Pid}</i></span>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">ID blog</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Paste ID in here" name="deleteid" onChange={this.handleChange} />
                        </div>
                        <button className="btn btn-outline-danger" type="submit">Confirm</button>
                        <Link to='/blogs'><button className="btn btn-outline-success" type="button">Go back</button></Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default Delete;