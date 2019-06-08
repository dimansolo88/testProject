import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialoReducer from "./dialogs-reducer";
import userReducer from "./user-reducer";








let reducers = combineReducers({

    profilepage: profileReducer,
    dialogspages: dialoReducer,
    usersPages: userReducer,

});



let store = createStore(reducers);







export default store;










