 const departmentReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_DEPARTMENT' : {
            return state.concat(action.payload)
        }
        default : {
            return state
        }
    }
}

export default departmentReducer