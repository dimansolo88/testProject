let send_message = "SEND-MESSAGE";
let update_message = "UPDATE-MESSAGE";


let initialstate = {

    dialogsdata: [
        {id: "alina", name: "Alina", avatar: "http://i.imgur.com/Ax0Kfaj.jpg"},
        {id: "bazil", name: "Bazil", avatar: "http://i.imgur.com/Ax0Kfaj.jpg"},
        {id: "matsal", name: "Matsal", avatar: "http://i.imgur.com/Ax0Kfaj.jpg"},
        {id: "herman", name: "Herman", avatar: "http://i.imgur.com/Ax0Kfaj.jpg"},
        {id: "timur", name: "Timur", avatar: "http://i.imgur.com/Ax0Kfaj.jpg"}
    ],

    messagesdata: [
        {id: "1", message: "hi",},
        {id: "2", message: "Hi gays",},
        {id: "3", message: "shit",},
        {id: "4", message: "hi i am herman",},
        {id: "5", message: "hi am timur",},
    ],


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


