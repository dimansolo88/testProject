import {connect} from "react-redux";
import React from "react";
// import * as axios from "axios";
import Users from "./Users";
import {
    follU, pr,
    setCurrentpagesAC, setTotalUsersFromServerAC,
    setUsersActionCreator, showPrealoderAC, toogleDiableBotton,
    unFollowActionCreator
} from "../../redux/user-reducer";
import {usersAPI} from "../../API/API";


class UsersContanier extends React.Component {

    componentDidMount() {
        this.props.showPrealoderOnUsers(true);
        usersAPI.getUsers(this.props.currentPage,this.props.quantityUsersOnPage)
            .then(data => {
                this.props.showPrealoderOnUsers(false);
                this.props.setUsers(data.items);
                this.props.totalusersCount(data.totalCount)
            })
    }


    onChanhePage = (pages) => {
        this.props.setPages(pages);
        this.props.showPrealoderOnUsers(true);
        usersAPI.selectUsersCurrentPage(pages,this.props.quantityUsersOnPage)
            .then(data => {
                this.props.showPrealoderOnUsers(false);
                this.props.setUsers(data.items)
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
                      followingProgress={this.props.followingProgress}
                      toogleDiableBotton={this.props.toogleDiableBotton}



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
        followingProgress: state.usersPages.followingProgress




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
    showPrealoderOnUsers:showPrealoderAC,toogleDiableBotton} )(UsersContanier);


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
