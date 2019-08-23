import React from "react";
import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import ava from '../../../assets/images/userPhoto.jpg'
import newMessages from '../../../assets/images/new-messages.jpg'

const Dialogitem = (props) => {
    return (


        <div className={style.items}>
            {!props.photos.small ? <img src={ava} alt="avatar" className={style.avatar}/> : <img  src={props.photos.small} alt="avatar" className={style.avatar}/> }
            <NavLink to={"/dialogs/" + props.id}  className={style.link} activeClassName={style.active}>
                 {props.name}  </NavLink> {props.countMessages > 0 && <span className={style.count}> {props.countMessages} </span> }
            <div className={style.formatDate}>
                {props.date}
            </div>
        </div>
    );
};

export default Dialogitem;