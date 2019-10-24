import React from 'react'
import {EditProfileReduxForm} from "./editProfileDataForm";
// import style from './EditProfileData.module.css'

const EditProfileData = ({setProfileUser, editModeOff, onCancel, Onsubmit, children, editProfileData, saveProfile,
                             initialValues}) => {
    const onSubmit = (forDAta) => {
        saveProfile(forDAta)
        // editModeOff()

    };

    return (

        <div>
            <button onClick={editModeOff}>Close</button>
            <EditProfileReduxForm initialValues={initialValues} setProfileUser={setProfileUser} onSubmit={onSubmit}/>
        </div>


    )

};
export default EditProfileData;