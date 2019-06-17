// import React from 'react';

import {addpostActionCreator, updatepostActionCreator} from "../../redux/profile-reducer";
import Mypost from "./Mypost";
import {connect} from "react-redux";







// const MypostContanier = (props) => {
//
//     // let postselements =
//     //     props.state.postdata.map(post => <Post message={post.message} like={post.like} />)
//
//
//
//
//     let addpost = () => {
//
//
//         props.dispatch(addpostActionCreator());
//
//
//     };
//
//
//
//
//     let postchange = (text) => {
//
//
//
//         props.dispatch(updatepostActionCreator(text))
//
//     };
//
//
//
//
//     return (<Mypost add={addpost}  change={postchange}  stated={props.state} dispatch={props.dispatch}  />  )
// };


const mapStateToProps = (state) => {
    return {
        stated: state.profilepage
    }



};

const mapDispatchToProps = (dispatch) => {

    return {
        add: () => {
            dispatch(addpostActionCreator());
        },

        change: (text) => {
            dispatch(updatepostActionCreator(text))
    }

    }

};

const superMypostContanier = connect(mapStateToProps, mapDispatchToProps)(Mypost);







export default superMypostContanier;

