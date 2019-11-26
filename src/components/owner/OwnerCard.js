import React, { Component } from 'react'

class OwnerCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require(`./${this.props.owner.pictureName}`)} alt="Dog" />
                    </picture>
                    <h3>Name: <span className="card-ownerName">{this.props.owner.name}</span></h3>
                    <p><b>Phone:</b> {this.props.owner.phone}</p>
                </div>
            </div>
        )
    }

}

export default OwnerCard