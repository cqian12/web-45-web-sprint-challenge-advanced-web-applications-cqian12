import React from 'react'
import { Route, Redirect } from 'react-router-dom'

//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in

const PrivateRoute = ({component:BubblePage,...remaining}) => {
    return <Route {...remaining} render={(props) => {
        if (localStorage.getItem('token')) {
            return <BubblePage {...props} />
        } else {
            return <Redirect to='/login' />
        }
    }} />
}

export default PrivateRoute