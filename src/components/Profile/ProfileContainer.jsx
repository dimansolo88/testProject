import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfileU} from "../../redux/profile-reducer";



class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/1068`)
            .then(response => {
               this.props.setProfileU(response.data)



            })

    }



    render() {
        return (
            <Profile  {...this.props}  />
        )


    }

}


let mapStateToProps = (state) => {
    return {
        setProfileUser: state.profilepage.setProfileUs,

    }

};





export default connect (mapStateToProps,{setProfileU}) (ProfileContainer);



