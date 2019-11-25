// This component is for displaying the information for a single animal.
import React, { Component } from 'react'

class AnimalCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./dog.svg')} alt="Dog" />
                    </picture>
                    <h3>Name: <span className="card-petname">Doodles</span></h3>
                    <p>Breed: Poodle</p>
                </div>
            </div>
        )
    }
}

export default AnimalCard