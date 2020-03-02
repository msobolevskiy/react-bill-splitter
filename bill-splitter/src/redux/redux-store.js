import {createStore, combineReducers} from 'redux';
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer
});
// автоматически создаёт внутри себя state, внутри которого будут свойства  
let store = createStore(reducers); 

window.store = store
export default store;