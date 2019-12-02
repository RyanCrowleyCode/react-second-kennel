import React, { Component } from 'react'
import "./AnimalForm.css"
import AnimalManager from '../../modules/AnimalManager'

class AnimalEditForm extends Component {
    state = {
        animalName: '',
        breed: '',
        pictureName: '',
        loadingStatus: true
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingAnimal = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true })
        const editedAnimal = {
            id: this.props.match.params.animalId,
            name: this.state.animalName,
            pictureName: this.state.pictureName,
            breed: this.state.breed
        }

        AnimalManager.update(editedAnimal)
            .then(() => this.props.history.push("/animals"))
    }

    componentDidMount() {
        AnimalManager.get(this.props.match.params.animalId)
            .then(animal => {
                this.setState({
                    animalName: animal.name,
                    breed: animal.breed,
                    pictureName: animal.pictureName,
                    loadingStatus: false
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.pictureName ?
                    <picture>
                        <img className="edit-form-image" src={require(`./${this.state.pictureName}`)} alt="Animal" />
                    </picture>
                    : null}
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="animalName"
                                value={this.state.animalName}
                            />
                            <label htmlFor="animalName">Animal Name</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="breed"
                                value={this.state.breed}
                            />
                            <label htmlFor="breed">Breed</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                onClick={this.updateExistingAnimal}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </React.Fragment>
        )
    }

}

export default AnimalEditForm