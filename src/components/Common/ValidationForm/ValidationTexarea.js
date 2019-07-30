import React from 'react';
import style from './textarea.module.css'


export const Texarea = ({input, meta, ...props}) => {




    return (
        <div className={meta.error && meta.touched ? style.showError : ""}>
            <textarea  {...input} {...props} />
            <div>

                {meta.error && meta.touched && <span> {meta.error} </span>}


            </div>


        </div>
    )



};


export const Input = ({input, meta, ...props}) => {




    return (
        <div className={meta.error && meta.touched ? style.showError : ""}>
            <input  {...input} {...props} />
            <div>

                {meta.error && meta.touched && <span> {meta.error} </span>}


            </div>


        </div>
    )



};


