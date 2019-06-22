import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfileU} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {


        let userid = this.props.match.params.userid;
        if (!userid) {
            userid = 1068

        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userid)
            .then(response => {
                this.props.setProfileU(response.data)


            })

    }


    render() {
        return (
            <Profile  {...this.props} />
        )


    }

}


let mapStateToProps = (state) => {
    return {
        setProfileUser: state.profilepage.setProfileUs,

    }

};
let withURL = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfileU})(withURL);



