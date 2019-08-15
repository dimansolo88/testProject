import p from "./Dialogs.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator} from "../../Utilites/Validation";
import {Texarea} from "../Common/ValidationForm/ValidationTexarea";


const maxLength5 = maxLengthCreator(5);
const minLength = minLengthCreator(1);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            {!props.currentDialogId && <div>
                please select dialog
            </div> }

            {props.currentDialogId &&  <div className={p.send}>

                <Field component={Texarea} name={"dialogSendMessage"}
                       validate={[maxLength5, minLength ]} placeholder={"enter you message"}/>

                <div className={p.send}>

                    <button>send message</button>

                </div>

            </div> }
            {/*<div className={p.send}>*/}

            {/*    <Field component={Texarea} name={"dialogSendMessage"}*/}
            {/*           validate={[maxLength5, minLength ]} placeholder={"enter you message"}/>*/}

            {/*    <div className={p.send}>*/}

            {/*        <button>send message</button>*/}

            {/*    </div>*/}

            {/*</div>*/}


        </form>


    )
};


export const AddMessageReduxForm = reduxForm({form: 'dialog-message-form'})(AddMessageForm);

// export default AddMessageForm;

