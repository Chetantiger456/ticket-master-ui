import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './components/static/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import { connect } from 'react-redux'
import { startUserLogout } from './actions/userAction'
import Customers from './components/customers/Customers'
import Departments from './components/departments/Departments'

function App(props){

    const handleLogout = () => {
        props.dispatch(startUserLogout())
    }
    console.log(props.user)
    return(
        <BrowserRouter>
            <div>
                <h1>Ticket Master</h1>
                <Link to="/">Home</Link>
                {
                    
                    Object.keys(props.user).length !== 0 ? (
                        <div>
                             <Link to="/account">Account</Link>-
                             <Link to="/customers">Customers</Link>-
                             <Link to="/departments">Departments</Link>-
                            <Link to='#' onClick={ handleLogout }>Logout</Link>
                        </div>
                    ) : (
                        <div>
                             <Link to="/users/register">Register</Link>-
                            <Link to="/users/login">Login</Link>
                        </div>
                    )
                }

                <Switch>
                    <Route path="/" component= { Home } exact = { true } />
                    <Route path="/users/register" component= { Register } />
                    <Route path="/users/login" component= { Login } />
                    <Route path="/customers" component = {Customers} />
                    <Route path="/departments" component= {Departments }/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

const mapStatToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStatToProps)(App)