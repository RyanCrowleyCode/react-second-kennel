import React, { Component } from 'react'
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'

class EmployeeList extends Component {

    state = {
        employees = []
    }

    componentDidMount() {
        EmployeeManager.getAll()
        .then(employeeArray => {
            this.setState({
                employees = employeeArray
            })
        })
    }

    render() {
        return (
            <div className="container-cards">
                {this.state.employees.map(employee => <EmployeeCard key={employee.id}/>)}
            </div>
        )
    }

}

export default EmployeeList