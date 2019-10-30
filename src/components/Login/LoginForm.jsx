import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../Utilites/Validation";
import {Input} from "../Common/ValidationForm/ValidationTexarea";
import style from '../Common/ValidationForm/textarea.module.css'


const LoginForm = (props) => {


    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={required} component={Input} name={"email"}
                       placeholder={"enter yor login or e mail"} type="text"/>

            </div>

            <div>
                <Field validate={required} component={Input} name={"password"}
                       placeholder={"enter your password"} type="password"/>

            </div>

            <div>
                <Field component={"input"} name={"rememberMe"} type="checkbox"/> remember me

            </div>

            {props.captchaUrl && <div>
                <img src={props.captchaUrl} alt="captcha"/>
                {props.captchaUrl && <Field validate={required} component={Input} name={"captcha"}
                                            placeholder={"enter anti boot symbols"} type="text"/>}
            </div>}


            {props.error && <div className={style.showError}>

                <span> {props.error} </span>

            </div>}

            <div>
                <button> Sign In</button>
            </div>


        </form>


    )


};


export const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);


// export default LoginForm;