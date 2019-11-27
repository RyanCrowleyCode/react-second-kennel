import React, { Component } from 'react'
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'

class EmployeeList extends Component {

    state = {
        employees: []
    }

    deleteEmployee = id => {
        EmployeeManager.delete(id)
        .then(() => {
            EmployeeManager.getAll()
            .then(newEmployees => {
                this.setState({
                    employees: newEmployees
                })
            })
        })
    }

    componentDidMount() {
        EmployeeManager.getAll()
            .then(employeeArray => {
                this.setState({
                    employees: employeeArray
                })
            })
    }

    render() {
        return (
            <div className="container-cards">
                {this.state.employees.map(employee => <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    deleteEmployee={this.deleteEmployee}
                />)}
            </div>
        )
    }

}

export default EmployeeList