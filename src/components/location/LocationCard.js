import React, { Component } from 'react'

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./dog.svg')} />
                    </picture>
                    <h3><span className="card-petname">Nashville North</span></h3>
                    <p>Street: 500 Puppy Way<br />
                    City: Nashville<br />
                    State: TN<br />
                    Zip: 37023
                    </p>
                </div>
            </div>
        )
    }

}

export default LocationCard