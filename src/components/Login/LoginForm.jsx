import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../Utilites/Validation";
import {Input} from "../Common/ValidationForm/ValidationTexarea";





const LoginForm = (props) => {


    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={required} component={Input} name={"email"} placeholder={"enter yor login or e mail"} type="text"/>

            </div>

            <div>
                <Field validate={required} component={Input} name={"password"} placeholder={"enter your password"} type="password"/>

            </div>

            <div>
                <Field component={"input"} name={"rememberMe"} type="checkbox"/> remember me

            </div>


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