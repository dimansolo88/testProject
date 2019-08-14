import React from "react";
import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import ava from '../../../assets/images/userPhoto.jpg'

const Dialogitem = (props) => {
    return (


        <div className={style.items}>
            <img src={ava} alt="avatar" className={style.avatar}/>
            <NavLink to={"/dialogs/" + props.id} className={style.link}>  {props.name} </NavLink>
            <span className={style.formatDate}>
                {props.date}
            </span>
        </div>
    );
};

export default Dialogitem;