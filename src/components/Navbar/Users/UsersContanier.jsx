// import Users from "./Users";
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentpagesAC,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../../redux/user-reducer";
import Users from "./Users";


const mapStateToProps = (state) => {
    return {
        users: state.usersPages.users,
        totalUsers: state.usersPages.totalUsers,
        quantityUsersOnPage: state.usersPages.quantityUsersOnPage,
        currentValue:state.usersPages.currentValue,

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
        },

        serPages: (pages) => {
            dispatch(setCurrentpagesAC(pages))
        }
    }
};


const UsersContanier = connect(mapStateToProps, mapDispatchToProps)(Users);

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
