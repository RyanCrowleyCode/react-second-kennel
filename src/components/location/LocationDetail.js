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
        pictureName: '',
        loadingStatus: true

    }

    handleDelete = () => {
        this.setState({loadingStatus: true})
        LocationManager.delete(this.props.locationId)
        .then(() => this.props.history.push("/locations"))
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
                pictureName: locationObject.pictureName,
                loadingStatus: false
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
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Remove</button>
                </div>
            </div>
        </div>
        )
    }

}

export default LocationDetail