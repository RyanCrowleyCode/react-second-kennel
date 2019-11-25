import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import LocationCard from './location/LocationCard'
import EmployeeCard from './employee/EmployeeCard'
import OwnerCard from './owner/OwnerCard'


class ApplicationViews extends Component {

    render() {
        return (
            // setting up all of the routes, so that when the url matches the path, React will know what component to render
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList />
                }} />
                <Route path="/locations" render={(props) => {
                    return <LocationCard />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeCard />
                }}
                />
                <Route path="/owners" render={(props) => {
                    return <OwnerCard />
                }} 
                />
            </React.Fragment>
        )
    }

}

export default ApplicationViews