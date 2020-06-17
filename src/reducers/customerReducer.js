const customerReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_CUSTOMER': {
           return state.concat(action.payload)
        }
        case 'UPDATE_CUSTOMER' : {
            state.map((customer) => {
                if(customer._id == action.payload._id){
                    Object.assign({}, customer, action.payload)
                }else{
                    Object.assign({}, customer)
                }
            })
        }
        case  'DELETE_CUSTOMER' : {
           return (state.filter(customer => customer._id !== action.payload._id))
        }
        default :{
            return [].concat(state)
        }
    }
}

export default customerReducer