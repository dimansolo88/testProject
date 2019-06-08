// import React from "react";
import {sendMessageCreator, updateMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        state: state.dialogspages
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


const DialogsContanier = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContanier;
