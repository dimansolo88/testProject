import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileStatusThunkCreator,
    profileInfoThunkCreator,
    updateProfileStatusThunkCreator
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAthREdirect} from "../HOC/RedirectComponent";
import {getAuthMe, getUserProfile} from "../../redux/Selectors/ProfileSelector";


class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let userid = this.props.match.params.userid;
        if (!userid) {
            userid = this.props.autorizedUserId;
            if (!userid) {
                this.props.history.push('login')
            }
        }
        this.props.profileInfo(userid);
        this.props.getStatus(userid);
    };

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userid !== this.props.match.params.userid) {
        }
        this.refreshProfile()
    }


    render() {
        return (
            <Profile  {...this.props} />

        )


    }

}

let mapStateToProps = (state) => {
    return {
        // setProfileUser: state.profilepage.setProfileUs,
        setProfileUser: getUserProfile(state),
        // isAuth: state.auth.isAuth,
        isAuth: getAuthMe(state),
        status: state.profilepage.status,
        isFetching: state.profilepage.isFetching,
        autorizedUserId: state.auth.userId


    }

};

export default compose(
    connect(mapStateToProps, {
        profileInfo: profileInfoThunkCreator,
        getStatus: getProfileStatusThunkCreator, updateStatus: updateProfileStatusThunkCreator
    }),
    withRouter,
    WithAthREdirect
)(ProfileContainer);





