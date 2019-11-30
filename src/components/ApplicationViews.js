import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owner/OwnerDetail'


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
                    return <AnimalDetail
                        animalId={parseInt(props.match.params.animalId)}
                        {...props} />
                }} />
                <Route exact path="/locations" render={(props) => {
                    return <LocationList />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail
                        locationId={parseInt(props.match.params.locationId)}
                        {...props} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail
                        employeeId={parseInt(props.match.params.employeeId)}
                        {...props} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList />
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail
                        ownerId={parseInt(props.match.params.ownerId)}
                        {...props} />
                }} />
            </React.Fragment>
        )
    }

}

export default ApplicationViews