import React, { Component } from 'react'
import AnimalManager from '../../modules/AnimalManager'
import './AnimalForm.css'

class AnimalForm extends Component {
    state = {
        animalName: '',
        breed: '',
        loadingStatus: false
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Local method for validation, set loadingStatus, create animal
    // object, invoke AnimalManager post method, and redirect to the full
    // Animal List
    constructNewAnimal = evt => {
        evt.preventDefault()
        if (this.state.animalName === "" || this.state.breed === "") {
            window.alert("Please input an animal name and breed")
        } else {
            this.setState({loadingStatus: true})
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
                pictureName: "dog.svg"
            }

            // Create the animal and redirect user to animal list
            AnimalManager.post(animal)
            .then(() => this.props.history.push("/animals"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input 
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="animalName"
                                placeholder="Animal name"
                            />
                            <label htmlFor="animalName">Name</label>
                            <input 
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="breed"
                                placeholder="Breed"
                            />
                            <label htmlFor="breed">Breed</label>
                        </div>
                        <div className="alignRight">
                            <button 
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewAnimal}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </React.Fragment>
        )
    }

}

export default AnimalForm