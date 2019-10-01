import React from "react";
import style from './ProfileInfo.module.css';
import Prealoder from "../../Common/Ptrealoder";
import photos from '../../../assets/images/userPhoto.jpg'
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHook from "./WithHook";
import ProfileInfoData from "./ProfileInfoData";


const ProfileInfo = (props) => {


    if (!props.setProfileUser) {  // to fix
        return <Prealoder/>
    }

    const getChangePhoto = (e) => {
        let fileName = e.target.files[0];
        props.getPhoto(fileName)
    };


    return (
        <div className={style.info}>
            <img src={props.setProfileUser.photos.large ? props.setProfileUser.photos.large
                : photos} alt="ProfilePhoto"/>
            {!props.match.params.userid && <input type={"file"} onChange={getChangePhoto}/>}

            <ProfileStatusWithHook {...props}  />
            <ProfileInfoData setProfileUser={props.setProfileUser}/>

        </div>
    );
};


export default ProfileInfo;