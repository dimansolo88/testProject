import {profileAPI} from "../API/API";
import {stopSubmit} from "redux-form";

let set_AuthMe = "SET-AUTH-ME";


let initialstate = {

    userId: null,
    email: null,
    login: null,
    isAuth: false,


};


const authReducer = (state = initialstate, action) => {


    switch (action.type) {
        case set_AuthMe:
            return {
                ...state,
                ...action.payload,
                // isAuth: action.payload,
            };

        default:
            return state;


    }
};


export const authMe = (userId, email, login,isAuth) => ({type: set_AuthMe, payload: {userId, email, login, isAuth}});


export const auhMeThunkCreator = () => {
    return (dispatch) => {
   return  profileAPI.authMe()
            .then(response => {
                let {id, email, login} = response.data.data;
                if (response.data.resultCode === 0) {
                    dispatch(authMe(id, email,login,true ));

                }

            })

    }
};

export const loginThunkCreator = (email,password,rememberMe) => (dispatch) => {
     profileAPI.login(email,password,rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(auhMeThunkCreator())
            }
            else {
                dispatch(stopSubmit('login', {_error: response.data.messages.length > 0
                        ? response.data.messages[0] : "some error"  }))
            }
        })
};


export const logOutThunkCreator = () => (dispatch) => {
    profileAPI.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                    dispatch(authMe(null, null, null, false))

            }
        })


};




export default authReducer;

