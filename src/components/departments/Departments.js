import React from 'react'
import { connect } from 'react-redux'
import { startGetDepartments } from '../../actions/departmentAction'
import DepartmentForm from './DepartmentForm'
import DepartmentItem from './DepartmentItem'

class Departments extends React.Component{

    componentDidMount(){
        if(this.props.departments.length == 0){
            this.props.dispatch(startGetDepartments())
        }
    }

    render(){
        //console.log(this.props.departments)
        return(
            <div>
                <h2>Departments list - {this.props.departments.length}</h2>
              
                <DepartmentItem />
                <DepartmentForm />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        departments: state.departments
    }
}

export default connect(mapStateToProps)(Departments)