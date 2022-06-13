import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {formfieldReducer} from "./reducers/formReducers"

const reducer = combineReducers({
    formfields:formfieldReducer,
})

let initialState={};
const middleware =[thunk];

const dataStore=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default dataStore;