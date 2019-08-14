import {dialogsAPI} from "../API/API";

let send_message = "SEND-MESSAGE";
let update_message = "UPDATE-MESSAGE";
let get_dialogs_success = "GET-DIALOGS-SUCCESS";



let initialstate = {


    dialogsdata: [],

    messagesdata: [],

    selectedDialogId: null,


    // textmessage: "",


};


const dialoReducer = (state = initialstate, action) => {


    switch (action.type) {
        case get_dialogs_success:

            return {
                ...state, dialogsdata:action.payload};


        // case update_message:
        //
        //     return {
        //         ...state,
        //         textmessage: action.textmessage
        //     };
        //
        //
        // case send_message:
        //     let textmessage = action.message;
        //     return {
        //         ...state,
        //         // textmessage: "",
        //         messagesdata: [...state.messagesdata, {id: 6, message: textmessage}]
        //     };




        default: return state;
    }

};




export const sendMessageCreator = (message) => ({
    type: send_message, message
});


export const getDialogsSuccessActionCreator = (dialogs) => ({

    type:get_dialogs_success, payload:dialogs
});


export const getDialogsThunkCreator = () => (dispatch) => {
    dialogsAPI.getDialogs().then(dialogs => {

        dispatch(getDialogsSuccessActionCreator(dialogs))

    })

};




export default dialoReducer;


