import React, { Component } from 'react'
import './Location.css'
import { Link } from 'react-router-dom'

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require(`./${this.props.location.pictureName}`)} alt="Location" />
                    </picture>
                    <h3>Name: <span className="card-locationName">{this.props.location.name}</span></h3>
                    <p>Street: {this.props.location.street}<br />
                        City: {this.props.location.city}<br />
                        State: {this.props.location.state}<br />
                        Zip: {this.props.location.zip}
                    </p>
                    <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>
                        Remove
                    </button>
                    <Link to={`/locations/${this.props.location.id}`}><button type="button">Details</button></Link>
                </div>
            </div>
        )
    }

}

export default LocationCard