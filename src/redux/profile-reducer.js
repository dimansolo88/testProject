import {profileAPI} from "../API/API";
import {reset} from 'redux-form';

let ADD_POST = "SN/PROFILE_REDUCER/ADD-POST";
let SET_PROFILE_USER = "SN/PROFILE_REDUCER/SET-PROFILE-USER";
let SET_PROFILE_STATUS = "SN/PROFILE_REDUCER/SET-PROFILE-STATUS";
let SHOW_PRELOADER = "SN/PROFILE_REDUCER/SHOW-PRELOADER";
let DELETE_POST = "SN/PROFILE_REDUCER/DELETE_POST";
let UPDATE_PHOTO_PROFILE = "SN/PROFILE_REDUCER/UPDATE_PHOTO_PROFILE";


let initialState = {

    postdata: [],
    textmypost: "jjj",
    setProfileUs: null,
    status: "",
    isFetching: false,


};


const profileReducer = (state = initialState, action) => {

    // let stateCopy;

    switch (action.type) {
        case ADD_POST:
            let newpost = {
                id: 5,
                message: action.post,
                like: 0,
                avatar: "https://www.meme-arsenal.com/memes/3a75d4f2bb6ed66a449fdb8d7836712b.jpg",

            };

            return {
                ...state,
                postdata: [...state.postdata, newpost],
                // stateCopy.postdata.push(newpost);
                textmypost: ""
            };

        case DELETE_POST:
            return {
                ...state, postdata: state.postdata.filter(p => p.id !== action.postId)
            };

        case SET_PROFILE_USER:
            return {
                ...state, setProfileUs: action.profile
            };

        case SET_PROFILE_STATUS:
            return {
                ...state, status: action.status
            };

        case SHOW_PRELOADER:
            return {
                ...state, isFetching: action.isFetching
            };

        case UPDATE_PHOTO_PROFILE:
            return {
                ...state, setProfileUs: {...state.setProfileUs, photos: action.photo}
            };


        default:
            return state;


    }
};

// if (action.type === add_post) {
//     let newpost = {
//         id: 5,
//         message: state.textmypost,
//         like: 0,
//
//     };
//
//     state.postdata.push(newpost);
//     state.textmypost = "";
//
// } else if (action.type === update_post) {
//
//     state.textmypost = action.postext;
//
//
//
//
// }
//
//
// return state;


export const addpostActionCreator = (post) => ({type: ADD_POST, post});
export const deleteActionCreator = (postId) => ({type: DELETE_POST, postId});
export const setProfileU = (profile) => ({type: SET_PROFILE_USER, profile});
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status});
export const showPrealoderAC = (isFetching) => ({type: SHOW_PRELOADER, isFetching});
export const updatePhotoAC = (photo) => ({type: UPDATE_PHOTO_PROFILE, photo});

export const addPOstThunkCreator = (post) => (dispatch) => {
    dispatch(addpostActionCreator(post));
    dispatch(reset('addNewPOst'));  // requires form name
}

export const profileInfoThunkCreator = (userid) => {
    return (dispatch) => {
        profileAPI.profileInfo(userid)
            .then(response => {
                dispatch(setProfileU(response.data))
            })
    }
};

export const getProfileStatusThunkCreator = (userid) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userid)
            .then(response => {
                dispatch(setProfileStatus(response.data))
            })
    }
};

export const updateProfileStatusThunkCreator = (status) => (dispatch) => {
    dispatch(showPrealoderAC(true));
    profileAPI.updateProfileStatus(status)
        .then(response => {
            dispatch(showPrealoderAC(false));
            if (response.data.resultCode === 0) {
                dispatch(setProfileStatus(status));
            }
        });
};


export const updatePhotoProfileThunkCreator = (photo) => async (dispatch) => {
    try {
        dispatch(showPrealoderAC(true));
        let res = await profileAPI.updatePhotoProfile(photo);
        dispatch(showPrealoderAC(false));
        if (res.resultCode === 0) {
            dispatch(updatePhotoAC(res.data.photos));
        }
    } catch (e) {
        console.log(e)
    }

};

export const saveProfileThunkCreator = (profileData) => async (dispatch, getState) => {
    try {
        dispatch(showPrealoderAC(true));
        let res = await profileAPI.updateProfileData(profileData);
        dispatch(showPrealoderAC(false));
        if (res.data.resultCode === 0) {
            let userId = getState().auth.userId;
            dispatch(profileInfoThunkCreator(userId));
        }
    }
    catch (e) {
        console.log(e)
    }

};

export default profileReducer;


// let add_post = "ADD-POST";
// let update_post = "UPDATE-POST";
//
//
// let initialstate = {
//
//     postdata: [
//         {
//             id: 1,
//             message: "today i in first time eated a dog shit, it was great, and me nowbody seen ",
//             like: "1200"
//         },
//         {id: 2, message: "hi", like: "34",},
//         {id: 3, message: "t is mt first podt", like: "0",},
//         {id: 4, message: "all is worse", like: "0",},
//
//
//     ],
//
//
//     textmypost: "jjjj"
//
//
// };
//
//
// const profileReducer = (state = initialstate, action) => {
//
//     switch (action.type) {
//         case add_post:
//             let newpost = {
//                 id: 5,
//                 message: state.textmypost,
//                 like: 0,
//
//             };
//             let stateCopy = {...state};
//
//             state.postdata.push(newpost);
//             state.textmypost = "";
//             return state;
//
//         case update_post:
//             state.textmypost = action.postext;
//             return state;
//
//         default:
//             return state;
//
//
//     }
//
//
//     // if (action.type === add_post) {
//     //     let newpost = {
//     //         id: 5,
//     //         message: state.textmypost,
//     //         like: 0,
//     //
//     //     };
//     //
//     //     state.postdata.push(newpost);
//     //     state.textmypost = "";
//     //
//     // } else if (action.type === update_post) {
//     //
//     //     state.textmypost = action.postext;
//     //
//     //
//     //
//     //
//     // }
//     //
//     //
//     // return state;
// };
//
//
// export const addpostActionCreator = () => ({
//     type: add_post
// });
//
//
// export const updatepostActionCreator = (textposts) => ({
//     type: update_post, postext: textposts
//
// });
//
//
// export default profileReducer;