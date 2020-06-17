import axios from "../config/axios"
export const setUser = (user) => {
    return { type: 'SET_USER', payload: user}
}
export const startUserLogin = (formData, redirect) => {
    return(dispatch) => {
        axios.post('/users/login', formData)
        .then((response) => {
            if(response.data.hasOwnProperty('error')){
                alert(response.data.error)
            }else{
                alert('Logged in successfully')
                localStorage.setItem('authToken', response.data.token)
                axios.get('users/account', {
                    headers: {
                        'x-auth' : localStorage.getItem('authTolen')
                    }
                })
                .then((response) => {
                    const user = response.data
                    dispatch(setUser(user))
                })
                .catch((error) => {
                    console.log(error)
                })
                redirect()
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export const startGetUser = () => {
    return (dispatch) => {
        axios.get('/users/account', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const user = response.data
            dispatch(setUser(user))
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

//export const startRegisterUser = (formData, props) => {
    export const startUserRegister = (formData, redirect) => {
    return(dispatch) => {
       // console.log('action generator', formData)
       axios.post('/users/register', formData)
       .then((response) => {
          // console.log(response.data)
          if(response.data.hasOwnProperty('errors')) {
             alert(response.data.message) 
          }else{
              alert('you have registered successfully')
            //props.history.push('/users/login')
            redirect()
          }
       })
       .catch((error) => {
           console.log(error)
       })
    }
}

export const startUserLogout = () => {
    return (dispatch) => {
        axios.delete('/users/logout',{
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.notice){
                localStorage.removeItem('authToken')
                dispatch(setUser({}))
                window.location.href = '/'
            }
        })
    }
}

