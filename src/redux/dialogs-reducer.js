let send_message = "SEND-MESSAGE";
let update_message = "UPDATE-MESSAGE";


let initialstate = {

    dialogsdata: [],

    messagesdata: [],

    selectedDialogId: null,


    // textmessage: "",


};


const dialoReducer = (state = initialstate, action) => {


    switch (action.type) {
        case update_message:

            return {
                ...state,
                textmessage: action.textmessage
            };


        case send_message:
            let textmessage = action.message;
            return {
                ...state,
                // textmessage: "",
                messagesdata: [...state.messagesdata, {id: 6, message: textmessage}]
            };




        default:
            return state;
    }

};




export const sendMessageCreator = (message) => ({
    type: send_message, message
});




export default dialoReducer;


