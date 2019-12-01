import React, { Component } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import './EmployeeForm.css'
import firstLetterCase from '../../modules/helpers'

class EmployeeForm extends Component {
    state = {
        name: "",
        info: "",
        loadingStatus: false
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewEmployee = evt => {
        evt.preventDefault()
        if (this.state.name === "" || this.state.info === "") {
            window.alert("Please input a name and info")
        } else {
            this.setState({loadingStatus: true})
            const employee = {
                name: firstLetterCase(this.state.name),
                info: firstLetterCase(this.state.info),
                pictureName: "defaultEmployee.jpg"
            }

            EmployeeManager.post(employee)
            .then(() => this.props.history.push("/employees"))
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
                                placeholder="Employee Name"
                            />
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="info"
                                placeholder="Info"
                            />
                            <label htmlFor="info">Info</label>
                        </div>
                        <div className="alignRight">
                            <button 
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewEmployee}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </React.Fragment>
        )
    }

}

export default EmployeeForm