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
        // props.add(data);
        props.sendMessage(props.match.params.userId, data.dialogSendMessage);

    };


    let dialogselements =
        props.dialogsdata.map(dialog => <Dialogitem key={dialog.id} id={dialog.id} name={dialog.userName} date={dialog.lastDialogActivityDate}  />);


    // let messageelements =
    //     props.messagesdata.map(mess => <Dialosmessage message={mess.message} key={mess.id}/>);


    return (
        <div className={p.dialogs}>
            <div className={p.dialogsitems}>


                {dialogselements}




            </div>



            <div className={p.messages}>
                <Dialosmessage  messagesdata={props.messagesdata}/>
                {/*{messageelements}*/}


                <AddMessageReduxForm {...props} selectedDialogId={props.selectedDialogId} onSubmit={onSubmit}/>



            </div>


        </div>

    );
};


export default Dialogs;
