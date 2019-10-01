import React, {useState} from "react";
import style from './ProfileInfo.module.css';
import Prealoder from "../../Common/Ptrealoder";
import photos from '../../../assets/images/userPhoto.jpg'
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHook from "./WithHook";
import ProfileInfoData from "./ProfileInfoData";
import EditProfileData from "./EditProfileData";


const ProfileInfo = (props) => {
    const [editProfileData, setEdiProfileData] = useState(false);

    const editModeChangeOn = () => {
        setEdiProfileData(true)
    };

    const editModeOff = () => {
        setEdiProfileData(false)
    };


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
            {!editProfileData ? <ProfileInfoData setProfileUser={props.setProfileUser}
                                                 editModeChangeOn={editModeChangeOn} userId={props.match.params.userid}/> :
                <EditProfileData setProfileUser={props.setProfileUser} editModeOff={editModeOff}/>}





        </div>
    );
};


export default ProfileInfo;