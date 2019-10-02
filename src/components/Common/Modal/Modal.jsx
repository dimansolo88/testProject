import React from 'react'
import Portal from "../Portal";
import style from './Modal.module.css'



const EditProfileData = ({setProfileUser, editModeOff, title,onCancel, Onsubmit, children, editProfileData }) => {
    return (
        <>
            { editProfileData &&
            <Portal>
                <div className={style.modalOverLay}>
                    <div className={style.modalWindow}>
                        <div className={style.modalHeader}>
                            <div className={style.modalTitle}>

                            </div>

                        </div>
                        <div className={style.modalBody}>
                            {children}

                        </div>
                        <div className={style.modalFooter}>
                            <button onClick={editModeOff} >Close</button>

                        </div>

                    </div>


                </div>
            </Portal>
            }
        </>

    )

};
export default EditProfileData;