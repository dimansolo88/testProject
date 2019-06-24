import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import {
    follU,
    setCurrentpagesAC, setTotalUsersFromServerAC,
    setUsersActionCreator, showPrealoderAC,
    unFollowActionCreator
} from "../../redux/user-reducer";


class UsersContanier extends React.Component {

    componentDidMount() {
        this.props.showPrealoderOnUsers(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.quantityUsersOnPage}`
            ,{withCredentials:true})
            .then(response => {
                this.props.showPrealoderOnUsers(false);
                this.props.setUsers(response.data.items);
                this.props.totalusersCount(response.data.totalCount)
            })
    }


    onChanhePage = (pages) => {
        this.props.setPages(pages);
        this.props.showPrealoderOnUsers(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pages}
        &count=${this.props.quantityUsersOnPage}`,{withCredentials: true})
            .then(response => {
                this.props.showPrealoderOnUsers(false);
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
                      totalusersCount={this.props.totalusersCount}
                      onChanhePage={this.onChanhePage}
                      isFetching={this.props.isFetching}
                      showPrealoderOnUsers={this.props.showPrealoderOnUsers}


        />


    }

}


const mapStateToProps = (state) => {
    return {
        users: state.usersPages.users,
        totalUsers: state.usersPages.totalUsers,
        quantityUsersOnPage: state.usersPages.quantityUsersOnPage,
        currentPage: state.usersPages.currentPage,
        isFetching: state.usersPages.isFetching,

    }
};


// const mapDispatchToProps = (dispatch) => {
//     return {
//         follU: (id) => {
//             dispatch(followActionCreator(id))
//         },
//         unfollU: (id) => {
//             dispatch(unFollowActionCreator(id))
//         },
//
//         setUsers: (user) => {
//             dispatch(setUsersActionCreator(user))
//         },
//
//         setPages: (pages) => {
//             dispatch(setCurrentpagesAC(pages))
//         },
//
//         totalusersCount: (count) => {
//             dispatch(setTotalUsersFromServerAC(count))
//         },
//
//         showPrealoderOnUsers: (isFetching) => {
//             dispatch(showPrealoderAC(isFetching))
//         }
//
//
//     }
// };


// const UsersContanier = connect(mapStateToProps, mapDispatchToProps)(Users);

export default connect(mapStateToProps, {
    follU,
    unfollU: unFollowActionCreator,
    setUsers:setUsersActionCreator,
    setPages: setCurrentpagesAC,
    totalusersCount: setTotalUsersFromServerAC,
    showPrealoderOnUsers:showPrealoderAC,} )(UsersContanier);


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
