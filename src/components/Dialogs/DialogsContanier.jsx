import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {compose} from "redux";
import {WithAthREdirect} from "../HOC/RedirectComponent";
import {withRouter} from "react-router-dom";




const DialogsContanier = (props) =>  {
    return (

        <Dialogs {...props}/>


    )
};

const mapStateToProps = (state) => {
    return {
        state: state.dialogspages,
        isAuth: state.auth.isAuth,
}

};



const mapDispatchToProps = (dispatch) => {
    return {
        add: (message) => {
            dispatch(sendMessageCreator(message));

        },
        // changemess: (text) => {
        //            dispatch(updateMessageCreator(text))
        //         }

    }

};

//




export default compose (
connect (mapStateToProps, mapDispatchToProps), withRouter, WithAthREdirect)(DialogsContanier);


