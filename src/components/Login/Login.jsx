import React from 'react';
import {LoginReduxForm} from "./LoginForm";
import style from "./login.module.css"
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/Auth-reducer";
import {Redirect} from "react-router-dom";


const Login = (props) => {

    const onSubmit = ({email, password, rememberMe, captcha}) => {
        props.loginThunkCreator(email, password, rememberMe, captcha);


    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }


    return <div className={style.login}>


        <h1> Login </h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />


    </div>
};


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl:state.auth.captcha,
    }


};

export default connect(mapStateToProps, {loginThunkCreator})(Login);