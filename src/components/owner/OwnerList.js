import React, { Component } from 'react'
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager'
import './Owner.css'

class OwnerList extends Component {
    state = {
        owners: []
    }

    deleteOwner = id => {
        OwnerManager.delete(id)
            .then(() => {
                OwnerManager.getAll()
                    .then(newOwners => {
                        this.setState({
                            owners: newOwners
                        })
                    })
            })
    }

    componentDidMount() {
        // gett all of the owners
        OwnerManager.getAll()
            .then(ownersArray => {
                // update the empty array of owners in state to reflect the owners we got from the fetch call
                this.setState({
                    owners: ownersArray
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <section className="section-content">
                    <button type="button" className="btn" onClick={() => { this.props.history.push('/owners/new') }}>
                        Add Owner
            </button>
                </section>
                <div className="container-cards">
                    {this.state.owners.map(owner => <OwnerCard
                        key={owner.id}
                        owner={owner}
                        deleteOwner={this.deleteOwner}
                    />)}
                </div>
            </React.Fragment>
        )
    }

}

export default OwnerList