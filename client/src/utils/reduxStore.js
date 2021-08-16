import { createStore } from 'redux'
import reducer from './reducers'

const reduxStore = createStore(reducer);
export default reduxStore;