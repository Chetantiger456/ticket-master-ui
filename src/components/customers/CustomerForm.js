import React from 'react'
import { connect } from 'react-redux'
import { startCreateCustomer } from '../../actions/customerAction'

class CustomerForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name: props ? '': props.name,
            email: props ? '': props.email,
            mobile: props ? '': props.mobile
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
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile
        }
        this.props.dispatch(startCreateCustomer(formData))
        this.setState({
            name: '',
            email:'',
            mobile:''
        })
    }

   
    
    render(){
        
        return(
            <div>
                
                <form onSubmit = { this.handleSubmit }>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                           name="name" 
                           value={ this.state.name }
                           onChange={ this.handleChange }
                    /> <br/>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                           name="email" 
                           value={ this.state.email }
                           onChange={ this.handleChange }
                    /> <br/>
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text"
                           name="mobile" 
                           value={ this.state.mobile }
                           onChange={ this.handleChange }
                    /> <br/>       
                    <input type="submit"
                           value="Add" />
                </form>
            </div>
        )
    }
}

export default connect()(CustomerForm)