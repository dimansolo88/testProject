import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialoReducer from "./dialogs-reducer";
import userReducer from "./user-reducer";
import authReducer from "./Auth-reducer";








let reducers = combineReducers({

    profilepage: profileReducer,
    dialogspages: dialoReducer,
    usersPages: userReducer,
    auth:authReducer,

});



let store = createStore(reducers);


window.store = store;







export default store;










