import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentpagesAC, setTotalUsersFromServerAC,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../../redux/user-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";


class UsersContanier extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.quantityUsersOnPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.totalusersCount(response.data.totalCount)
            })
    }


    onChanhePage = (pages) => {
        this.props.serPages(pages);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pages}
        &count=${this.props.quantityUsersOnPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })

    };


    render() {
        return <Users users={this.props.users}
                      totalUsers={this.props.totalUsers}
                      quantityUsersOnPage={this.props.quantityUsersOnPage}
                      currentPage={this.props.currentPage}
                      follU={this.props.follU}
                      unfollU={this.props.unfollU}
                      setUsers={this.props.setUsers}
                      serPages={this.props.serPages}
                      totalusersCount={this.props.totalusersCount}
                      onChanhePage={this.onChanhePage}
        />


    }

}


const mapStateToProps = (state) => {
    return {
        users: state.usersPages.users,
        totalUsers: state.usersPages.totalUsers,
        quantityUsersOnPage: state.usersPages.quantityUsersOnPage,
        currentPage: state.usersPages.currentPage,

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
        },

        totalusersCount: (count) => {
            dispatch(setTotalUsersFromServerAC(count))
        }
    }
};


// const UsersContanier = connect(mapStateToProps, mapDispatchToProps)(Users);

export default connect(mapStateToProps, mapDispatchToProps)(UsersContanier);


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
