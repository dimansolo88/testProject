// import Users from "./Users";
import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../../redux/user-reducer";
import UsersClass from "./UsersClass";


const mapStateToProps = (state) => {
    return {
        users: state.usersPages.users
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        follU: (id) => {
            dispatch(followActionCreator(id))
        },
        unfollU: (id) => {
            dispatch(unFollowActionCreator(id))
        },

        setUsers: (user) => {
            dispatch(setUsersActionCreator(user))
        }
    }
};


const UsersContanier = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContanier;


// import Users from "./Users";
// import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../../redux/user-reducer";
// import {connect} from "react-redux";
//
//
// const mapStateToProps = (state) => {
//     return {
//         users:state.usersPages.users
//     }
//
//
// };
//
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         folU: (id) => {
//             dispatch(followActionCreator(id))
//         },
//         unfolU: (id) => {
//             dispatch(unfollowActionCreator(id))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         }
//     }
// };
//
//
//
//
//
//
//
//
// const UsersContanier = connect(mapStateToProps, mapDispatchToProps)(Users);
//
//
// export default UsersContanier;
//
//
