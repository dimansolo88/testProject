import {dialogsAPI} from "../API/API";

let send_message = "SEND-MESSAGE";
let update_message = "UPDATE-MESSAGE";
let get_dialogs_success = "GET-DIALOGS-SUCCESS";
let PUT_UP_DIALOG = "PUT_UP_DIALOG";
let GET_MESSAGES = "GET_MESSAGES";
let SET_SELECT_DIALOG_ID = "SET_SELECT_DIALOG_ID";
let SEND_MESSAGES_SUCCESS = "SEND_MESSAGES_SUCCESS";
let GET_MESSAGES_COUNT_SUCCESS = "GET_MESSAGES_COUNT_SUCCESS";


let initialstate = {


    dialogsdata: [],
    messagesdata: [],
    selectedDialogId: null,
    newMessagesCount: 0,


    // textmessage: "",


};


const dialoReducer = (state = initialstate, action) => {


    switch (action.type) {
        case get_dialogs_success:

            return {
                ...state, dialogsdata: action.payload
            };

        case GET_MESSAGES:
            return {
                ...state, messagesdata: action.payload
            };

        case PUT_UP_DIALOG:
            return {
                ...state, dialogsdata: [state.dialogsdata.find(d => d.id == action.userId),
                    ...state.dialogsdata.filter(d => d.id != action.userId)]
            };

        case SET_SELECT_DIALOG_ID:
            return {
                ...state, selectedDialogId: action.payload
            };

        case SEND_MESSAGES_SUCCESS:
            return {
                ...state, messagesdata: [...state.messagesdata, action.messages]
            }

        case GET_MESSAGES_COUNT_SUCCESS:
            return {
                ...state, newMessagesCount: action.count
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


        default:
            return state;
    }

};


// export const sendMessageCreator = (message) => ({
//     type: send_message, message
// });


export const getDialogsSuccessActionCreator = (dialogs) => ({

    type: get_dialogs_success, payload: dialogs
});

export const getMessagesSuccessActionCreator = (messages) => ({
    type: GET_MESSAGES, payload: messages
});

export const selectDialogActionCreator = (userId) => ({
    type: SET_SELECT_DIALOG_ID, payload: userId
})


export const putUpActionCreator = (userId) => ({
    type: PUT_UP_DIALOG, userId
});

export const sendMessageSuccessActionCreator = (messages) => ({
    type: SEND_MESSAGES_SUCCESS, messages

})

export const getMessagesCountActionCreator = (count) => ({
    type: GET_MESSAGES_COUNT_SUCCESS, count

})


export const getDialogsThunkCreator = () => (dispatch) => {
    dialogsAPI.getDialogs().then(dialogs => {
        dispatch(getDialogsSuccessActionCreator(dialogs))
    })


};

export const getMessagesThunkCreator = (userId) => (dispatch) => {

    dialogsAPI.getMessages(userId).then(messages => {
        dispatch(getMessagesSuccessActionCreator(messages))
    })
}


export const startDialogThunkCreator = (userId) => (dispatch, getState) => {
    return dialogsAPI.startDialog(userId).then(res => {
        let dialogs = getState().dialogspages.dialogsdata.find(d => d.id == userId)
        if (dialogs) {
            dispatch(putUpActionCreator(userId))
        } else {
            dispatch(getDialogsThunkCreator())
        }
    })


};





export const sendMessageThunkCreator = (userId, body) => async (dispatch) => {

    let message = await dialogsAPI.sendMessage(userId, body);
    if (message.resultCode == 0) {
        dispatch(sendMessageSuccessActionCreator(message.data.message))

        dispatch(putUpActionCreator(userId))


    }

};


export const newCountThunkCreator = () => async (dispatch) => {
    let count = await dialogsAPI.getNewMessagesCount();
    dispatch(getMessagesCountActionCreator(count))


}


export default dialoReducer;


