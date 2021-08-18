import { createStore } from 'redux'
import reducer from './reducers'

//ask if there is any difference between 
//not importing createStore and having the const be "const reduxStore = Redux.createStore(reducer);"

const store = createStore(reducer);
export default store;
