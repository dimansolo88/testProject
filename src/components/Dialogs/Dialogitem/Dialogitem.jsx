import React from "react";
// import d from './Dialogitem.module.css';
import p from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogitem = (props) => {
    return (


        <div className={p.items}>
            <img src={props.avatar} alt="avatar" className={p.avatar}/>
            <NavLink to={"/dialogs/" + props.id} className={p.link}>  {props.name} </NavLink>
        </div>
    );
};

export default Dialogitem;