import React from "react";
import p from "../Dialogs.module.css";
import Prealoder from "../../Common/Ptrealoder";


const Dialosmessage = (props) => {


    return (

        <div className={p.message}>
            <div>
                messages
            </div>


            <div>
                {props.messagesdata.map(m => <div key={m.id}>


                    <div>
                        <b> {m.senderName}: </b>
                        <span> {m.addedAt} </span>

                    </div>

                    <div>
                        {m.body}
                    </div>


                </div>)}


            </div>
        </div>

    )

};


export default Dialosmessage;
