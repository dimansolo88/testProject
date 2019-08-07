

let INITIALISATION_AP = 'INITIALISATION_AP';


let initialisateState = {

   itIsInitialisation: null
    
};

const appReducer = (state = initialisateState, action) => {

    switch (action.type) {
        case  INITIALISATION_AP: {
            return {
                ...state,
                itIsInitialisation: true
            }
        }
        
        default: return state;


    }

};


export default appReducer;

export const initialisationActionCreator = () => ({
    type:INITIALISATION_AP
});

export const initialisationThunkCreator = () => (dispatch) => {

};

