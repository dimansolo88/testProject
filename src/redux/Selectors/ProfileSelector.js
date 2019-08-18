import {createSelector} from "reselect";

const getProfileUserSelector = (state) => {
    return state.profilepage.setProfileUs

};

export const getUserProfile = createSelector(getProfileUserSelector,(setProfileUs) => {
        return setProfileUs
    })


const getAuthMeSelector = (state) => {
    return state.auth.isAuth
}

export const getAuthMe = createSelector(getAuthMeSelector, (isAuth) => {
    return isAuth
})