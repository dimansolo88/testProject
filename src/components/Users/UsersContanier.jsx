import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import {
    followThunkCreator, setUserThunkCreator, unfollowThunkCreator
} from "../../redux/user-reducer";


class UsersContanier extends React.Component {

    componentDidMount() {

        const {currentPage,quantityUsersOnPage} = this.props;
        this.props.setUserThunkCreator(currentPage, quantityUsersOnPage);

    }


    onChanhePage = (pages) => {
        const {quantityUsersOnPage} = this.props;
        this.props.setUserThunkCreator(pages, quantityUsersOnPage);

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
                      followThunkCreator={this.props.followThunkCreator}
                      unfollowThunkCreator={this.props.unfollowThunkCreator}


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


export default connect(mapStateToProps, {setUserThunkCreator, followThunkCreator,
    unfollowThunkCreator})(UsersContanier);


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