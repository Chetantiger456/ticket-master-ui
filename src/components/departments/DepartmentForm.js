import React from 'react'
import { startCreateDepartment } from '../../actions/departmentAction'
import { connect } from 'react-redux'

class DepartmentForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const fromData = {
            name: this.state.name
        }
        this.props.dispatch(startCreateDepartment(fromData))
        this.setState({
            name: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit= { this.handleSubmit}>
                    <label> Department</label>
                    <input type="text"
                           name="name"
                           value={ this.state.name }
                           onChange={ this.handleChange }
                    />
                           <input type="submit"
                                  value= "Add Department"
                            />   
                </form>
            </div>
        )
    }
}

export default connect()(DepartmentForm)