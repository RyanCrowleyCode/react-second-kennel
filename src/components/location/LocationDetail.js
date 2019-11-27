import React, { Component } from 'react'
import LocationManager from '../../modules/LocationManager'
import './LocationDetail.css'

class LocationDetail extends Component {

    state = {
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        pictureName: ''

    }

    componentDidMount() {
        LocationManager.get(this.props.locationId)
        .then(locationObject => {
            this.setState({
                name: locationObject.name,
                street: locationObject.street,
                city: locationObject.city,
                state: locationObject.state,
                zip: locationObject.zip,
                pictureName: locationObject.pictureName
            })
        })
    }

    render() {
        return(
            <div className="details-card-container">
            <div className="details-card">
                <div className="card-content">
                    {this.state.pictureName ?
                        <picture>
                            <img src={require(`./${this.state.pictureName}`)} alt="Location" />
                        </picture>
                        : null}
                    <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <p>{this.state.street}
                        <br />{this.state.city}, {this.state.state} {this.state.zip}
                    </p>
                </div>
            </div>
        </div>
        )
    }

}

export default LocationDetail