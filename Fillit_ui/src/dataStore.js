import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {formfieldReducer} from "./reducers/formReducers"
import {userReducer, forgotPasswordReducer,
    profileReducer} from "./reducers/userReducer"

const reducer = combineReducers({
    formfields:formfieldReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
})


let initialState={};
const middleware =[thunk];

const dataStore=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default dataStore;