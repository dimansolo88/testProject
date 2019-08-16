import {
    getDialogsThunkCreator,
    getMessagesThunkCreator, selectDialogActionCreator,
    sendMessageCreator, sendMessageThunkCreator,
    startDialogThunkCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React, {Component} from "react";
import {compose} from "redux";
import {WithAthREdirect} from "../HOC/RedirectComponent";
import {withRouter} from "react-router-dom";


class DialogsContanier extends Component {
    componentDidMount() {
        let userId =  this.props.match.params.userId;
        if (!!userId) {
            this.props.startDialog(userId);
            this.props.getMessages(userId);
            this.props.setDialogId(userId);

        }

        this.props.getDialogs()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

            if (prevProps.match.params.userId !== this.props.match.params.userId) {
                let userId =  this.props.match.params.userId;
                if (!!userId) {
                    this.props.getMessages(userId);
                    this.props.setDialogId(userId);

                }

                else {
                    this.props.setDialogId(null);
                }

            }





    }

    render() {

        return (

            <Dialogs {...this.props}/>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        dialogsdata:state.dialogspages.dialogsdata,
        messagesdata: state.dialogspages.messagesdata,
        isAuth: state.auth.isAuth,
        selectedDialogId:state.dialogspages.selectedDialogId,
        currentDialogId:state.dialogspages.currentDialogId,

}

};



// const mapDispatchToProps = (dispatch) => {
//     return {
//         add: (message) => {
//             dispatch(sendMessageCreator(message));
//
//         },
//         // changemess: (text) => {
//         //            dispatch(updateMessageCreator(text))
//         //         }
//
//     }
//
// };

//




export default compose (
connect (mapStateToProps, {add:sendMessageCreator,
    getDialogs:getDialogsThunkCreator,
    startDialog:startDialogThunkCreator,getMessages:getMessagesThunkCreator,
    setDialogId:selectDialogActionCreator, sendMessage:sendMessageThunkCreator })
    , withRouter , WithAthREdirect)(DialogsContanier);




