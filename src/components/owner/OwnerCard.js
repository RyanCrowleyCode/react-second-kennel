import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OwnerCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require(`./${this.props.owner.pictureName}`)} alt="Owner" />
                    </picture>
                    <h3>Name: <span className="card-ownerName">{this.props.owner.name}</span></h3>
                    <p><b>Phone:</b> {this.props.owner.phone}</p>
                    <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>
                        Remove
                    </button>
                    <Link to={`/owners/${this.props.owner.id}`}><button>Details</button></Link>
                </div>
            </div>
        )
    }

}

export default OwnerCard