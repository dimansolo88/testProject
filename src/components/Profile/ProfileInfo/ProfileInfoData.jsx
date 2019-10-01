import React from 'react';
import style from "./ProfileInfo.module.css";


const ProfileInfoData = ({setProfileUser}) => {
    return <div>

        <div>

            <div className={style.web}>
                FullName: {setProfileUser.fullName}
            </div>
            <div>
                aboutMe: {setProfileUser.aboutMe}
            </div>
            <div>
                lookingForAJob: {!setProfileUser.lookingForAJob ? "I am not locking for any job "
                : setProfileUser.lookingForAJob}
            </div>


        </div>


        <div>
            <b>Contacts:</b> {Object.keys(setProfileUser.contacts).map(c =>
            <div key={c}>
                <div className={style.web}>
                    {c}:{setProfileUser.contacts[c]}
                </div>

            </div>
        )}
        </div>

    </div>
};


export default ProfileInfoData;

