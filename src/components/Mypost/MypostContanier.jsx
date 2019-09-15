import {addPOstThunkCreator} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import React from "react";
import MyPost from "./Mypost";


const MypostContanier =  (props) => {
    return (
        <MyPost {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        stated: state.profilepage
    }

};

export default connect(mapStateToProps, {addNewPost:addPOstThunkCreator})(MypostContanier)




