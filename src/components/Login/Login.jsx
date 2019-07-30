import React from 'react';
import {LoginReduxForm} from "./LoginForm";
import style from "./login.module.css"
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/Auth-reducer";
import {Redirect} from "react-router-dom";



const Login = (props) => {

    const onSubmit = (data) => {
        props.loginThunkCreator(data.email, data.password,data.rememberMe)

    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }



    return <div className={style.login} >

        <h1> Login </h1>
        <LoginReduxForm onSubmit={onSubmit}/>



    </div>
};



const mapStateToProps = (state) => {
   return { isAuth:state.auth.isAuth,
   }



};

export default connect (mapStateToProps, {loginThunkCreator}) (Login);