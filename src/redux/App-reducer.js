import {auhMeThunkCreator} from "./Auth-reducer";


let INITIALISATION_AP = 'INITIALISATION_AP';
let SHOW_GLOBAL_ERROR = 'APP-REDUCER/SHOW_GLOBAL_ERROR';
let REMOVE_GLOBAL_ERROR = 'APP-REDUCER/REMOVE_GLOBAL_ERROR';


let initialisateState = {

    itIsInitialisation: null,
    globalError: null

};

const appReducer = (state = initialisateState, action) => {

    switch (action.type) {
        case  INITIALISATION_AP: {
            return {
                ...state,
                itIsInitialisation: true
            }
        }
        case SHOW_GLOBAL_ERROR:
        case REMOVE_GLOBAL_ERROR:
            return {
                ...state,globalError:action.payload
            };

        default:
            return state;


    }

};



export const initialisationActionCreator = () => ({
    type: INITIALISATION_AP
});
export const showError = (error) => ({
    type:SHOW_GLOBAL_ERROR, payload:error
});
export const hideError = () => ({
    type:REMOVE_GLOBAL_ERROR
});

export const initiakisationThunkCreator = () => (dispatch) => {

    Promise.all([dispatch(auhMeThunkCreator())]).then(
        () => {
            dispatch(initialisationActionCreator())
        }
    )
};

export const showAndHideGlobalErrors = (someError) => (dispatch) => {
    dispatch(showError(someError.reason.message))
    setTimeout(() => {
        dispatch(hideError(null))
    },10000)
}


export default appReducer;

