import React from 'react'
import { connect } from 'react-redux'
import { startUserRegister } from '../../actions/userAction'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        const redirect = () => {
            return this.props.history.push('/users/login')
        }

        this.props.dispatch(startUserRegister(formData, redirect))
        //this.props.dispatch(startRegisterUser(formData), this.props)
    }

    render(){
        return(
            <div>
                <h2>Register - With us</h2>
                <form onSubmit={ this.handleSubmit }>
                    <label>User Name</label>
                    <input type="text"
                           name="username"
                           value={ this.state.username }
                           onChange= { this.handleChange }
                    /><br/>
                    <label>Email</label>
                    <input type="text"
                           name="email"
                           value={ this.state.email }
                           onChange= { this.handleChange }
                    /><br/>
                    <label>Password</label>
                    <input type="password"
                           name="password"
                           value={ this.state.password }
                           onChange= { this.handleChange }
                    /><br/>
                    <input type="submit"
                           value="Register" />
                </form>
            </div>
        )
    
    }
}

export default connect()(Register)