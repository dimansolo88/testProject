import {getDialogsThunkCreator, sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React, {Component} from "react";
import {compose} from "redux";
import {WithAthREdirect} from "../HOC/RedirectComponent";
import {withRouter} from "react-router-dom";


class DialogsContanier extends Component {
    componentDidMount() {
        this.props.getDialogs()
    }

    render() {
        return (

            <Dialogs {...this.props}/>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.dialogspages,
        isAuth: state.auth.isAuth,
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
connect (mapStateToProps, {add:sendMessageCreator, getDialogs:getDialogsThunkCreator})
    , withRouter, WithAthREdirect)(DialogsContanier);


