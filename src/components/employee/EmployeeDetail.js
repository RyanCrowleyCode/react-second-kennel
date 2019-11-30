import React, { Component } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import './EmployeeDetail.css'

class EmployeeDetail extends Component {
    state = {
        name: '',
        info: '',
        pictureName: '',
        loadingStatus: true
    }

    handleDelete = () => {
        this.setState({loadingStatus: true})
        EmployeeManager.delete(this.props.employeeId)
        .then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
        EmployeeManager.get(this.props.employeeId)
        .then(employeeObject => {
            this.setState({
                name: employeeObject.name,
                info: employeeObject.info,
                pictureName: employeeObject.pictureName,
                loadingStatus: false
            })
        })
    }

    render() {
        return(
            <div className="details-card-container">
            <div className="details-card">
                <div className="card-content">
                    {this.state.pictureName ?
                        <picture>
                            <img src={require(`./${this.state.pictureName}`)} alt="Employee" />
                        </picture>
                        : null}
                    <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <p>{this.state.info}</p>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Fire</button>
                </div>
            </div>
        </div>
        )
    }

}

export default EmployeeDetail