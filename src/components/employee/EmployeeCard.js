import React, { Component } from 'react'
import './Employee.css'
import { Link } from 'react-router-dom'

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
                    <Link to={`/employees/${this.props.employee.id}`}><button>Details</button></Link>
                </div>
            </div>
        )
    }

}

export default EmployeeCard