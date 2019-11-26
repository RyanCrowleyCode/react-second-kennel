import React, { Component } from 'react'
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    state = {
        locations: []
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
            <div className="container-cards">
                {this.state.locations.map(location => <LocationCard
                    key={location.id}
                    location={location}
                />)}
            </div>
        )
    }

}

export default LocationList