import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthMe} from "../../redux/Selectors/ProfileSelector";
import {logOut} from "../../redux/sagas/sagaAuth";
// import {logOutThunkCreator} from "../../redux/Auth-reducer";

class HeaderContainer extends React.Component {



    render() {

        return (
            <Header {...this.props} />
        )
    }


}


const mapStateToProps = (state) => {
    return {
        // isAuth: state.auth.isAuth,
        isAuth: getAuthMe(state),
        login: state.auth.login,

    }
};


export default connect(mapStateToProps, {logOut:logOut})(HeaderContainer);

