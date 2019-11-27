import React, { Component } from 'react'
import './Employee.css'

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require(`./${this.props.employee.pictureName}`)} alt="Employee" />
                    </picture>
                    <h3>Name: <span className="card-employeeName">{this.props.employee.name}</span></h3>
                    <p><b>Info:</b> {this.props.employee.info}</p>
                    <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>
                        Fire
                    </button>
                </div>
            </div>
        )
    }

}

export default EmployeeCard