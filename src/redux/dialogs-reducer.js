import {dialogsAPI} from "../API/API";

let send_message = "SEND-MESSAGE";
let update_message = "UPDATE-MESSAGE";
let get_dialogs_success = "GET-DIALOGS-SUCCESS";
let PUT_UP_DIALOG = "PUT_UP_DIALOG";



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
                ...state, dialogsdata:[...state.dialogsdata,...action.payload]
            };

        case PUT_UP_DIALOG:
            return {
                ...state, dialogsdata:
            };


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


export const putUpActionCreator = (userId) => ({
    type:PUT_UP_DIALOG, payload:userId
});


export const getDialogsThunkCreator = () => async (dispatch) => {
    let dialogs =  await dialogsAPI.getDialogs();
        dispatch(getDialogsSuccessActionCreator(dialogs))

    };


export const startDialogThunkCreator = (userId) => (dispatch, getState) => {
    dialogsAPI.startDialog(userId).then(res => {
        let dialogs = getState().dialogspages.dialogsdata.find(d => d.id === userId)
        if(dialogs) {
           dispatch(putUpActionCreator(userId))
        }
        else {
            dispatch(getDialogsThunkCreator())
        }
    })


};




export default dialoReducer;


