import React from 'react'
import ReactDom from 'react-dom'
import App from './App'


import configureStore from './stores/configureStore'
import { Provider } from 'react-redux'
import { startGetUser } from './actions/userAction'
import { startGetDepartments } from './actions/departmentAction'
//import { startGetCustomers } from './actions/customerAction'

const store = configureStore()

console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

// handle page reload
if(localStorage.getItem('authToken')){
    store.dispatch(startGetUser())
    //store.dispatch(startGetCustomers())
   // store.dispatch(startGetDepartments())
}

const jsx = (
    <Provider store = {store}>
        <App />
    </Provider>
)

ReactDom.render(jsx, document.getElementById('root'))