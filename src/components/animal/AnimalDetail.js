import React, { Component } from 'react'
import AnimalManager from '../../modules/AnimalManager'
import './AnimalDetail.css'


class AnimalDetail extends Component {

    state = {
        name: "",
        breed: "",
        pictureName: "",
        loadingStatus: true
    }

    handleDelete = () => {
        // invoke the delete function in AnimalManager and re-direct to the animal list.
        // disable button as soon as button is clicked by changing loadingStatus to true
        this.setState({ loadingStatus: true })
        AnimalManager.delete(this.props.animalId)
            .then(() => this.props.history.push("/animals"))
    }

    componentDidMount() {
        // get(id) from AnimalManager and hang on to the data; put it into state
        AnimalManager.get(this.props.animalId)
            .then((animalObject) => {
                this.setState({
                    name: animalObject.name,
                    breed: animalObject.breed,
                    pictureName: animalObject.pictureName,
                    loadingStatus: false
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
                        <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
                        <button
                            type="button"
                            onClick={() => this.props.history.push(`/animals/${this.props.animalId}/edit`)}
                        >Edit</button>
                    </div>
                </div>
            </div>

        )
    }

}

export default AnimalDetail