import React from 'react';
import i from "./Profileimg.module.css";
import imageProfile from "../../../assets/images/imageProfile.jpeg"


const Profileimg = () =>{
    return (
        <img  className = {i.profile_img} src={imageProfile}   alt="profile" />
    );
}

export default Profileimg;