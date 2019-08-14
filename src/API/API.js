import * as axios from "axios";


const instance = axios.create({

    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'dc432957-d988-48fc-8955-9690b8d0ed47'
    }
});


export const usersAPI = {

    getUsers(currentPage, quantityUsersOnPage) {
        return instance.get(`users?page=${currentPage}
        &count=${quantityUsersOnPage}`)
            .then(response => response.data)

    },


    // selectUsersCurrentPage(pages, quantityUsersOnPage) {
    //
    //     return instance.get(`users?page=${pages}
    //     &count=${quantityUsersOnPage}`)
    //         .then(response => response.data)
    //
    // },

    follow(id) {
        return instance.post(`follow/${id}`)


    },


    unfoloow(id) {
        return instance.delete(`follow/${id}`)

    },


};


export const profileAPI = {

    authMe() {
        // return instance.get(`auth/me`)
        console.warn("please to use new method: authAPI.authMe() ")
        return authAPI.authMe();


    },

    profileInfo(userid) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userid)

    },

    getProfileStatus(userid) {
        return instance.get(`profile/status/` + userid)
    },

    updateProfileStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    },

    login(email, password, rememberMe = false) {
        console.warn("please to use new method: logInAPI.login");
        // return instance.post(`auth/login`, {email,password,rememberMe})
        return logInAPI.login(email, password, rememberMe = false)
    },

    logOut() {
        console.warn("please to use new method: logInAPI.login");
        return logInAPI.logOut()
        // return instance.delete(`auth/login`)
    },

};

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)

    },
};


export const logInAPI = {
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logOut() {
        return instance.delete(`auth/login`)
    },


};


export const dialogsAPI = {
    getDialogs() {
        return instance.get(`dialogs`)
            .then(response => response.data)
    },

    putTopDialog(userId) {
        return instance.put(`dialogs${userId}`)
            .then(response => response.data)
    }


};





