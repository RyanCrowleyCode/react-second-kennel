// This component is for displaying the information for a single animal.
import React, { Component } from 'react'
import './Animal.css'

class AnimalCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require(`./${this.props.animal.pictureName}`)} alt="Animal" />
                    </picture>
                    <h3>Name: <span className="card-petname">{this.props.animal.name}</span></h3>
                    <p>Breed: {this.props.animal.breed}</p>
                    <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>
                        Discharge
                    </button>
                </div>
            </div>
        )
    }
}

export default AnimalCard