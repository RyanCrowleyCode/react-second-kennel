import React, { Component } from 'react'
import AnimalManager from '../../modules/AnimalManager'
import './AnimalDetail.css'


class AnimalDetail extends Component {

    state = {
        name: "",
        breed: "",
        pictureName: ""
    }

    componentDidMount() {
        // get(id) from AnimalManager and hang on to the data; put it into state
        AnimalManager.get(this.props.animalId)
            .then((animalObject) => {
                this.setState({
                    name: animalObject.name,
                    breed: animalObject.breed,
                    pictureName: animalObject.pictureName
                })
            })
    }

    render() {
        return (
            <div className="details-card-container">
                <div className="details-card">
                    <div className="card-content">
                        {this.state.pictureName ?
                            <picture>
                                <img src={require(`./${this.state.pictureName}`)} alt="Animal" />
                            </picture>
                            : null}
                        <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                        <p><b>Breed:</b> {this.state.breed}</p>
                    </div>
                </div>
            </div>

        )
    }

}

export default AnimalDetail