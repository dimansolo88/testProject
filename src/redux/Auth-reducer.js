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


export const authMe = (id,email,login) => ({type:set_AuthMe, payload:{id,email,login}});


export default authReducer;

