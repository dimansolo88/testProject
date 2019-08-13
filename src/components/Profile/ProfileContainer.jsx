import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileStatusThunkCreator,
    profileInfoThunkCreator,
    updateProfileStatusThunkCreator
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
// import {WithAthREdirect} from "../HOC/RedirectComponent";
import {compose} from "redux";
import {WithAthREdirect} from "../HOC/RedirectComponent";


class ProfileContainer extends React.Component {

    componentDidMount() {


        let userid = this.props.match.params.userid;
        if (!userid) {
            userid = this.props.autorizedUserId;
            if (!userid) {
                this.props.history.push('login')

            }

        }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userid)
        // profileAPI.ProfileInfo(userid)
        //     .then(response => {
        //         this.props.setProfileU(response.data)
        //
        //
        //     })

        this.props.profileInfo(userid);
        this.props.getStatus(userid);

    }


    render() {
        return (
            <Profile  {...this.props}  />

        )


    }

}

//
// let redirect = WithAthREdirect(ProfileContainer);


let mapStateToProps = (state) => {
    return {
        setProfileUser: state.profilepage.setProfileUs,
        isAuth: state.auth.isAuth,
        status: state.profilepage.status,
        isFetching:state.profilepage.isFetching,
        autorizedUserId: state.auth.userId


    }

};

export default compose(
    connect(mapStateToProps, {profileInfo: profileInfoThunkCreator,
        getStatus: getProfileStatusThunkCreator,updateStatus: updateProfileStatusThunkCreator}),
    withRouter,
    WithAthREdirect
)(ProfileContainer);


// let withURL = withRouter(redirect);
//
// export default connect(mapStateToProps, {profileInfo: profileInfoThunkCreator})    (withURL);



