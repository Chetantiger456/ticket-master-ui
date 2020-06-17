import axios from "../config/axios"

export const setCustomer = (customers) => {
    return { type: 'SET_CUSTOMER', payload: customers}
}

export const updateCustomer = (customer) => {
    return { type: 'UPDATE_CUSTOMER', payload: customer}
}

export const deleteCustomer = (customer) => {
    console.log('Inside dispatched method')
    return { type: 'DELETE_CUSTOMER', payload: customer}
}

export const startGetCustomers = () => {
    return (dispatch) => {
        axios.get('/customers', {
            headers : {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
           // console.log(response.data)
            dispatch(setCustomer(response.data))
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    
}

export const startCreateCustomer = (formData) => {
    return (dispatch) => {
        axios.post('/customers', formData, {
            headers : {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message, response.data.name)
            }else{
                dispatch(setCustomer(response.data))
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export const startUpdateCustomer = (customer) => {
    return(dispatch) => {
        axios.put(`/customers/${customer._id}`, {
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then(response => {
            if(Object.keys(response.data).length !== 0){
                dispatch(updateCustomer(response.data))
            }
        })
    }
}

export const startDeleteCustomer = (id) =>{
    return(dispatch)=> {
        axios.delete(`/customers/${id}`, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response =>{
           if(Object.keys(response.data).length !== 0)
           {
               dispatch(deleteCustomer(response.data))
           }
        })
    }
}