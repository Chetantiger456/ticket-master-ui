import React from 'react'
import { connect } from 'react-redux'
import { startGetCustomers, startDeleteCustomer, startUpdateCustomer, updateCustomer } from '../../actions/customerAction'
import CustomerForm from './CustomerForm'

class Customers extends React.Component{
    componentDidMount(){
        this.props.customers.length == 0 &&
        this.props.dispatch(startGetCustomers())
    }

    handleEdit = (customer) => {
       // console.log(customer)
       return <CustomerForm  customers = {customer}  />
       
        // this.props.dispatch(startUpdateCustomer(customer))
    }

    handleRemove = (id) =>{
        //console.log(id)
        const confirmValue = window.confirm("Are you sure ?")
       confirmValue && this.props.dispatch(startDeleteCustomer(id))
    }

    render(){
        return(
            <div>
                <h2>Customers List - { this.props.customers.length }</h2>
                <table border="1">
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Edit</th>
                        <th>Remove</th>

                    </thead>
                    <tbody>
                {
                    
                    this.props.customers.map(customer => {
                        return(
                        <tr key={ customer._id }>
                            <td>{ customer.name } </td>
                            <td>{ customer.email } </td>
                            <td>{ customer.mobile } </td>
                            <td><button onClick={ ()=> {
                                this.handleEdit(customer)
                            }}>Edit</button></td>
                            <td><button onClick={ ()=> {
                                this.handleRemove(customer._id)
                            }}>Remove</button></td>
                        </tr>
                        )
                    })
                }
                </tbody>
                </table>

                <CustomerForm  />
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        customers: state.customers
    }
} 
export default connect(mapStateToProps)(Customers)