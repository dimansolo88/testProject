import {profileAPI} from "../API/API";

let set_AuthMe = "SET-AUTH-ME";


let initialstate = {

    id: null,
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
                isAuth: true,
            };

        default:
            return state;


    }
};


export const authMe = (id, email, login,isAuth) => ({type: set_AuthMe, payload: {id, email, login, isAuth}});


export const auhMeThunkCreator = () => {
    return (dispatch) => {
        profileAPI.authMe()
            .then(response => {
                let {id, email, login} = response.data.data;
                if (response.data.resultCode === 0) {
                    dispatch(authMe(id, email, login));

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
        })
};




export default authReducer;

