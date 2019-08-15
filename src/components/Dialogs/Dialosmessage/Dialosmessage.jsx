import React from "react";
import p from "../Dialogs.module.css";


const Dialosmessage = (props) => {
    return (

        <div className={p.message}>
            <div>
                messages
            </div>

            <div>
                {props.messagesdata.map(m => <div key={m.id}>
                    <div>
                        {m.message}
                    </div>


                </div>)}


                {/*{props.message}*/}
            </div>
        </div>

)

};


export default Dialosmessage;
