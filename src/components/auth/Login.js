import React from 'react'
import { connect } from 'react-redux'
import { startUserLogin } from '../../actions/userAction'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
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
            email: this.state.email,
            password: this.state.password
        }
        const redirect = ()=>{
            return this.props.history.push('/')
        }
        this.props.dispatch(startUserLogin(formData, redirect))
    }
    render(){
        return(
            <div>
                <h2>Login</h2>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                           name="email" 
                           value={ this.state.email }
                           onChange={ this.handleChange }
                    /><br/>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           name="password" 
                           value={ this.state.password }
                           onChange={ this.handleChange }
                    /><br/>
                    <input type="submit"
                           value="Login"
                    />              

                </form>
            </div>
        )
    
    }
}

export default connect()(Login)