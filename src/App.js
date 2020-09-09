import React from 'react' 
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './components/static/Home'
import Dashboard from './components/static/Dashboard'

import Register from './components/auth/Register'
import Login from './components/auth/Login'

import CustomersList from './components/customers/List'
import CustomerShow from './components/customers/Show'
import CustomerNew from './components/customers/New'

import DepartmentsList from './components/departments/List'
import EmployeesList from './components/employees/List'

import TicketsList from './components/tickets/List'
import TicketsNew from './components/tickets/New'
import TicketEdit from './components/tickets/Edit'


import { startUserLogout } from './actions/userAction'
import TicketNew from './components/tickets/New'
class App extends React.Component {
    
    render() {
        const handleLogout = () => {
            this.props.dispatch(startUserLogout())
        }
        return (
            <BrowserRouter>
                <div>
                    <h1>Ticket Master</h1>
                    <Link to="/">Home</Link>
                    {
                        Object.keys(this.props.user).length !== 0 ? (
                            <div>
                                <Link to="/dashboard">Dashboard</Link>
                                <Link to="/customers">Customers</Link>
                                <Link to="/departments"> Departments </Link>
                                <Link to="/employees"> Employees </Link>
                                <Link to="/tickets"> Tickets </Link>
                                <Link to="/account">Account</Link>
                                <Link to="#" onClick={handleLogout}>Logout</Link>
                            </div>
                        ) : (
                                <div>
                                    <Link to="/users/register">Register</Link>
                                    <Link to="/users/login">Login</Link>
                                </div>
                            )
                    }


                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/users/register" component={Register} />
                        <Route path="/users/login" component={Login} />

                        <Route path="/customers" component={CustomersList} exact={true} />
                        <Route path="/customers/new" component={CustomerNew} exact={true} />
                        <Route path="/customers/:id" component={CustomerShow} />

                        <Route path="/departments" component={DepartmentsList} exact={true} />
                        <Route path="/employees" component={EmployeesList} exact={true} />

                        <Route path="/tickets" component={TicketsList} exact={true} />
                        <Route path="/tickets/new" component={TicketsNew} />
                        <Route path="/tickets/edit/:id" component={TicketEdit} />
                    </Switch>

                </div>
            </BrowserRouter>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        user: state.user 
    }
}
export default connect(mapStateToProps)(App)