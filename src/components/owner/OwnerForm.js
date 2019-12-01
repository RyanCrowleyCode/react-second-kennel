import React, { Component } from 'react'
import OwnerManager from '../../modules/OwnerManager'
import './OwnerForm.css'
import firstLetterCase from '../../modules/helpers'

class OwnerForm extends Component {
    state = {
        name: "",
        phone: "",
        loadingStatus: false
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewOwner = evt => {
        evt.preventDefault()
        if (this.state.name === "" || this.state.phone === "") {
            window.alert("Please input a name and phone number")
        } else {
            this.setState({loadingStatus: true})
            const owner = {
                name: firstLetterCase(this.state.name),
                phone: this.state.phone,
                pictureName: "defaultOwner.jpg"
            }

            OwnerManager.post(owner)
            .then(() => this.props.history.push("/owners"))
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
                                id="name"
                                placeholder="Owner name"
                            />
                            <label htmlFor="animalName">Name</label>
                            <input 
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="phone"
                                placeholder="123-555-1234"
                            />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="alignRight">
                            <button 
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewOwner}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </React.Fragment>
        )
    }

}

export default OwnerForm