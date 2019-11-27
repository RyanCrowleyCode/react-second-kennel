import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'


class ApplicationViews extends Component {

    render() {
        return (
            // setting up all of the routes, so that when the url matches the path, React will know what component to render
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
                }} />
                <Route path="/locations" render={(props) => {
                    return <LocationList />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList />
                }}
                />
                <Route path="/owners" render={(props) => {
                    return <OwnerList />
                }} 
                />
            </React.Fragment>
        )
    }

}

export default ApplicationViews