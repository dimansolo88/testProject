import {addPOstThunkCreator} from "../../redux/profile-reducer";
import Mypost from "./Mypost";
import {connect} from "react-redux";
import React from "react";


const MypostContanier =  (props) => {
    return (
        <Mypost {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        stated: state.profilepage
    }

};

export default connect(mapStateToProps, {addNewPost:addPOstThunkCreator})(MypostContanier)




