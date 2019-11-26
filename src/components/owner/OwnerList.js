import React, { Component } from 'react'
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager'

class OwnerList extends Component {
    state = {
        owners: []
    }

    componentDidMount () {
        // gett all of the owners
        OwnerManager.getAll()
        .then(ownersArray => {
            // update the empty array of owners in state to reflect the owners we got from the fetch call
            this.setState({
                owners: ownersArray
            })
        })
    }

    render () {
        return (
            <div className="container-cards">
                {this.state.owners.map(owner => <OwnerCard key={owner.id}/>)}
            </div>
        )
    }

}

export default OwnerList