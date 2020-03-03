import {createStore, combineReducers} from 'redux';
import personsReducer from "./persons-reducer";

let reducers = combineReducers({
    personsReducer: personsReducer
});
// автоматически создаёт внутри себя state, внутри которого будут свойства  
let store = createStore(reducers); 

window.store = store
export default store;