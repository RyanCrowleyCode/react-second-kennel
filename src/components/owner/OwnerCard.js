import React, { Component } from 'react'

class Ownercard extends Component {
    render () {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('../animal/dog.svg') alt="Dog"} />
                    </picture>
                    <h3>Name: <span className="card-petname">Susan Susanite</span></h3>
                    <p>Info: Loves them dogs.</p>
                </div>
            </div>
        )
    }

}

export default OwnerCard