import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import customerReducer from '../reducers/customerReducer'
import  departmentReducer from '../reducers/departmentReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        customers: customerReducer,
        departments: departmentReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore