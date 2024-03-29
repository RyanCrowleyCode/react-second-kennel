import React, { Component } from 'react'
import AnimalCard from './AnimalCard'
import AnimalManager from '../../modules/AnimalManager'

class AnimalList extends Component {
    // define what this component needs to render
    state = {
        animals: []
    }

    deleteAnimal = id => {
        AnimalManager.delete(id)
            .then(() => {
                AnimalManager.getAll()
                    .then((newAnimals) => {
                        this.setState({
                            animals: newAnimals
                        })
                    })
            })
    }

    componentDidMount() {
        //getAll from AnimalManager and hang on to that data; put it in state
        AnimalManager.getAll()
            .then((animalsArray) => {
                this.setState({
                    animals: animalsArray
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <section className="section-content">
                    <button type="button" className="btn" onClick={() => {this.props.history.push('/animals/new')}}>
                        Admit Animal
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.animals.map(animal => <AnimalCard
                        key={animal.id}
                        animal={animal}
                        deleteAnimal={this.deleteAnimal}
                        {...this.props}
                    />)}
                </div>
            </React.Fragment>
        )
    }
}

export default AnimalList