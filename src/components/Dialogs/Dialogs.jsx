import React from "react";
import p from './Dialogs.module.css';
// import {NavLink} from "react-router-dom";
import Dialogitem from "./Dialogitem/Dialogitem";
import Dialosmessage from "./Dialosmessage/Dialosmessage";
import {AddMessageReduxForm} from "./FormSendMessage";
// import {sendMessageCreator, updateMessageCreator} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {

    const onSubmit = (data) => {
        console.log(data);
        props.add(data.dialogSendMessage)

    };





    let states = props.state;




    let dialogselements =
        states.dialogsdata.map(dialog => <Dialogitem name={dialog.name} key={dialog.id}
                                                     id={dialog.id} avatar={dialog.avatar}/>);


    let messageelements =
        states.messagesdata.map(mess => <Dialosmessage message={mess.message} key={mess.id}/>);


    return (
        <div className={p.dialogs}>
            <div className={p.dialogsitems}>


                {dialogselements}




            </div>


            <div className={p.messages}>


                {messageelements}







                <AddMessageReduxForm onSubmit={onSubmit}/>







            </div>


        </div>

    );
};


export default Dialogs;
