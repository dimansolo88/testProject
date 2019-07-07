// import React from "react";
import {sendMessageCreator, updateMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAthREdirect} from "../HOC/RedirectComponent";



const mapStateToProps = (state) => {
    return {
        state: state.dialogspages,
        isAuth: state.auth.isAuth,
}

};



const mapDispatchToProps = (dispatch) => {
    return {
        add: () => {
            dispatch(sendMessageCreator());

        },
        changemess: (text) => {
            dispatch(updateMessageCreator(text))
        }

    }

};


let redirect = WithAthREdirect(Dialogs);


const DialogsContanier = connect(mapStateToProps, mapDispatchToProps)(redirect);

export default DialogsContanier;
