import React, { Component } from 'react'
import './OwnerDetail.css'
import OwnerManager from '../../modules/OwnerManager'

class OwnerDetail extends Component {

    state = {
        name: '',
        phone: '',
        pictureName: '',
    }

    componentDidMount() {
        OwnerManager.get(this.props.ownerId)
            .then(ownerObject => {
                this.setState({
                    name: ownerObject.name,
                    phone: ownerObject.phone,
                    pictureName: ownerObject.pictureName
                })
            })
    }

    render() {
        return (
            <div className="details-card-container">
                <div className="details-card">
                    <div className="card-content">
                        {this.state.pictureName ?
                            <picture>
                                <img src={require(`./${this.state.pictureName}`)} alt={this.state.name} />
                            </picture>
                            : null}
                        <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                        <p><b>Phone:</b> {this.state.phone}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default OwnerDetail