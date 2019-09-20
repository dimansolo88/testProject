import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialoReducer from "./dialogs-reducer";
import userReducer from "./user-reducer";
import authReducer from "./Auth-reducer";
import thunk from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./App-reducer";
import createSagaMiddleware from 'redux-saga';
import {dialogsSaga} from "./sagas/sagaDialogs";
import {AuthSAga} from "./sagas/sagaAuth";





const sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({

    profilepage: profileReducer,
    dialogspages: dialoReducer,
    usersPages: userReducer,
    auth: authReducer,
    form: formReducer,
    app:appReducer,


});


let store = createStore(reducers, applyMiddleware(thunk, sagaMiddleware));




sagaMiddleware.run(dialogsSaga);
sagaMiddleware.run(AuthSAga);




window.store = store;


export default store;










