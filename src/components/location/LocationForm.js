import React, { Component } from 'react'
import LocationManager from '../../modules/LocationManager'
import './LocationForm.css'
import firstLetterCase from '../../modules/helpers'

class LocationForm extends Component {
    state = {
        name: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        loadingStatus: false
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewLocation = evt => {
        evt.preventDefault()
        if (this.state.name === "" || this.state.street === "" || this.state.city === "" || this.state.state === "" || this.state.zip === "") {
            window.alert("Please input a location name, street, city, state, and zipcode")
        } else {
            this.setState({ loadingStatus: true })
            const location = {
                name: (firstLetterCase(this.state.name)),
                street: this.state.street,
                city: (firstLetterCase(this.state.city)),
                state: this.state.state,
                zip: (parseInt(this.state.zip)),
                pictureName: "defaultLocation.png"
            }

            LocationManager.post(location)
                .then(() => this.props.history.push("/locations"))
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
                                placeholder="Location name"
                            />
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="street"
                                placeholder="Location street"
                            />
                            <label htmlFor="street">Street</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="city"
                                placeholder="Location city"
                            />
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="state"
                                placeholder="Location state"
                            />
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="zip"
                                placeholder="Location zip"
                            />
                            <label htmlFor="zip">Zip</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewLocation}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </React.Fragment>
        )
    }

}

export default LocationForm