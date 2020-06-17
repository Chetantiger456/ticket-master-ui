import axios from "../config/axios"

export const setDepartment = (department) => {
    return { type: 'SET_DEPARTMENT', payload: department }
}

export const startGetDepartments = () => {
    return (dispatch) => {
        axios.get('/departments', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            dispatch(setDepartment(response.data))
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const startCreateDepartment = (formData) => {
    return (dispatch) => {
        axios.post('/departments', formData, {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }else{
                dispatch(setDepartment(response.data))
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
}