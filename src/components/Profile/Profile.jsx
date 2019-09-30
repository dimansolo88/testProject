import React from 'react';
import Profileimg from "./Profileimg/Profileimg";
import PfofileInfo from "./ProfileInfo/ProfileInfo";
import MypostContanier from "../Mypost/MypostContanier";


const Profile =  React.memo((props) => {



    return (
        <div>
            <Profileimg/>
            <PfofileInfo {...props}  />
            <MypostContanier/>
        </div>
    );
});


export default Profile;
