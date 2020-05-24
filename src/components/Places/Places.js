import React, { Component } from 'react';
import './Places.css'
import { Link } from "react-router-dom";
import { trackPromise } from 'react-promise-tracker';
import axios from 'axios';
class Places extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeslist: [],
        };
    }
    componentDidMount() {
        trackPromise(
            axios.get('https://travellog-6th-backend.herokuapp.com/places')
                .then(res => {
                    const placeslist = res.data;
                    this.setState({ placeslist });
                }))
    }
    render() {
        const { placeslist } = this.state;
        return (
            <div className="album py-5 bg" id="reviews">
                <div className="container">
                    <div className="row">
                        {placeslist.map((data, i) => {
                            return (
                                <div key={i} className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <img className="card-img-top" src={data.image} alt="Card" />
                                        <div className="card-body">
                                            <p className="card-text">
                                                <Link to="/blogs">
                                                    {data.name}
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Places; 