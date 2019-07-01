import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {auhMeThunkCreator} from "../../redux/Auth-reducer";
// import * as axios from 'axios';

class HeaderContainer extends React.Component {
    componentDidMount() {

        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
        //     withCredentials: true
        // })


        // profileAPI.authMe()
        //     .then(response => {
        //         let {id, email, login} = response.data.data;
        //         if (response.data.resultCode === 0) {this.props.authMe(id,email,login);
        //
        //         }
        //
        //     })

        this.props.authMe()

    }


    render() {

        return (
            <Header {...this.props} />
        )
    }


}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,

    }
};


export default connect(mapStateToProps, {authMe:auhMeThunkCreator})(HeaderContainer);

