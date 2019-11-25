import React, { Component } from 'react'

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('../animal/dog.svg')} />
                    </picture>
                    <h3>Name: <span className="card-petname">David Dogperson</span></h3>
                    <p>Info: David is awesome! 500 years experience</p>
                </div>
            </div>
        )
    }

}

export default EmployeeCard