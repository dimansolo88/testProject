let follow = "FOLLOW";
let unfollow = "UNFOLLOW";
let setUsersformServer = "SET-USERS-FROM-SERVER";
let setCurrentPages = "SET-CURRENT_VALUES";
let setTotalUsersfromServer = "SET-TOTAL-USERS-FROM-SERVER";
let showPrealoder = "SHOW-PREALODER";


let initialeestate = {
    users: [],
    totalUsers: 0,
    quantityUsersOnPage: 5,
    currentPage: 1,
    isFetching: true,

};

const userReducer = (state = initialeestate, action) => {
    switch (action.type) {


        case follow:
            return {
                ...state, users: state.users.map(users => {
                    if (users.id === action.userid)
                        return {...users, followed: true};
                    return users
                })
            };

        case unfollow:
            return {
                ...state, users: state.users.map(users => {
                    if (users.id === action.userid)
                        return {...users, followed: false};
                    return users
                })
            };

        case setUsersformServer:
            return {
                ...state, users: action.user
            };

        // return {
        //     ...state, users: [...state.users, ...action.payload]
        // };

        case setCurrentPages:
            return {
                ...state, currentPage: action.currentPages
            };

        case setTotalUsersfromServer:
            return {
                ...state, totalUsers: action.totalUsers
            };

        case showPrealoder:
            return {
                ...state, isFetching: action.isFetching
            };


        default:
            return state;
    }
};


export const follU = (userid) => ({
    type: follow, userid
});


export const unFollowActionCreator = (userid) => ({
    type: unfollow, userid
});


export const  setUsersActionCreator= (user) => ({
    type: setUsersformServer, user
});

export const setCurrentpagesAC = (currentPages) => ({
    type: setCurrentPages, currentPages
});

export const setTotalUsersFromServerAC = (totalUsers) => ({
    type: setTotalUsersfromServer, totalUsers
});

export const showPrealoderAC = (isFetching) => ({type:showPrealoder, isFetching });


export default userReducer;


// let follow = "FOLLOW";
// let unfollow = "UNFOLLOW";
// let setUsers = "SET-USERS";
//
//
// let initialestate = {
//     users: [
//         {id: 1, followed: false, firstName: "Alina", lastName: "Padshybiakina", status: "i am real love my family", location:{city:"New York", country: "USA"} },
//         {id: 2, followed: false, firstName: "Herman", lastName: "Padshybiakin", status: "I finished first class", location:{city:"Paris", country: "Fiance"} },
//         {id: 3, followed: false, firstName: "Timur", lastName: "Padshybiakin", status: "i am 2 years old", location:{city:"Berlin", country: "Germany"} },
//         {id: 4, followed: false, firstName: "King", lastName: "Padshybiakin", status: "iI like eat everything", location:{city:"Minsk", country: "Belarus"} },
//     ]
//
// };
//
//
//
// const userReducer = (state = initialestate, action ) => {
//         switch (action.type) {
//             case follow:
//                 return {
//                   ...state,users:state.users.map(u => {
//                       if (u.id === action.userid) return  {...u, followed: true };
//                       return u;
//                     })
//                 };
//
//             case unfollow:
//                 return {
//                     ...state, users:state.users.map(u => {
//                         if (u.id === action.userid) return  {...u,followed: false};
//                         return u;
//                     })
//                 };
//
//             case setUsers:
//                 return {
//                     ...state, users: [...state.users,...action.users]
//                 };
//
//
//             default:
//                 return state;
//         }
// };
//
//
//
// export const followActionCreator = (userid) => ({
//     type: follow, userid
// });
//
// export const unfollowActionCreator = (userid) => ({
//    type: unfollow, userid
// });
//
//
// export const setUsersActionCreator = (users) => ({
//    type: setUsers , users
// });
//
//
//
//
// export default userReducer;
//
