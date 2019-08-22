import React, {useState,useEffect} from "react";
import Prealoder from "../../Common/Ptrealoder";

const ProfileStatusWithHook = (props) => {

   const [editMode, setEditMode] = useState(false);
   const [status, setStatus] = useState(props.status);

   const onStatusChange = (e) => {
       setStatus(e.currentTarget.value)
   };



   const activeEditMode = () => {
       setEditMode(true)
   };



   const disableEditMode = () => {
       setEditMode(false)

       props.updateStatus(status)

   };

   useEffect(() => {
       setStatus(props.status)
   }, [props.status] );


        if (props.status === null) {  // to fix
            return <Prealoder/>
        }

        return (
            <div>

                <div>
                    {props.isFetching ? <Prealoder/> : null}
                </div>

                {!editMode ? <div>
                    <span onDoubleClick={activeEditMode}> {props.status || "change status"} </span>
                </div> : <div>
                    <input onChange={onStatusChange} autoFocus={true}
                           onBlur={disableEditMode} value={status}/>
                </div>
                }

            </div>
        )
    }



export default ProfileStatusWithHook;
