import React, { Component } from 'react'
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    state = {
        locations: []
    }

    deleteLocation = id => {
        LocationManager.delete(id)
            .then(() => {
                LocationManager.getAll()
                    .then(newLocations => {
                        this.setState({
                            locations: newLocations
                        })
                    })
            })
    }

    componentDidMount() {
        LocationManager.getAll()
            .then((locationsArray) => {
                this.setState({
                    locations: locationsArray
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <section className="section-content">
                    <button type="button" className="btn" onClick={() => this.props.history.push("/locations/new")}>Add Location</button>
                </section>
                <div className="container-cards">
                    {this.state.locations.map(location => <LocationCard
                        key={location.id}
                        location={location}
                        deleteLocation={this.deleteLocation}
                    />)}
                </div>
            </React.Fragment>
        )
    }

}

export default LocationList