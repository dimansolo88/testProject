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


    follow(id) {
        return instance.post(`follow/${id}`)


    },

    async unfoloow(id) {

        try {
            let res = await instance.delete(`follow/${id}`)
            return res.data.resultCode
        } catch (e) {
            console.log(e)
        }
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

    login(email, password, rememberMe = false, captcha = null) {
        console.warn("please to use new method: logInAPI.login");
        // return instance.post(`auth/login`, {email,password,rememberMe})
        return logInAPI.login(email, password, rememberMe, captcha )
    },

    logOut() {
        console.warn("please to use new method: logInAPI.login");
        return logInAPI.logOut()
        // return instance.delete(`auth/login`)
    },

    async updatePhotoProfile(photo) {
        let formData = new FormData();
        formData.append("image", photo);
        try {
            let res = await instance.put(`/profile/photo`, formData, {
                headers: {'content-type': 'multipart/form-data'}
            });
            return res.data
        } catch (e) {
            throw new Error(e.message)
        }

    },

    async updateProfileData(profileData) {
        try {
            let res = instance.put(`/profile`, profileData);
            return res
        } catch (e) {
            throw new Error(e.data.message)
        }

    }
};

export const authAPI = {
    async authMe() {
        try {
            return await instance.get(`auth/me`)
        } catch (e) {
            console.log(e)
        }

    },
};


export const logInAPI = {
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },

    logOut() {
        return instance.delete(`auth/login`)
    },


};

export const captchaAPI = {
    async captchaUrl() {
        try {
            let res =  await instance.get(`security/get-captcha-url`)
            return res.data
        } catch (e) {
            console.log(e)
        }

    }
};


export const dialogsAPI = {
    getDialogs() {
        return instance.get(`dialogs`)
            .then(response => response.data)

    },

    startDialog(userId) {
        return instance.put(`dialogs/${userId}`)
            .then(response => response.data)
    },

    getMessages(userId) {
        return instance.get(`dialogs/${userId}/messages`)
            .then(response => response.data.items)
    },

    sendMessage(userId, body) {
        return instance.post(`dialogs/${userId}/messages`, {body})
            .then(response => response.data)

    },

    getNewMessagesCount() {
        return instance.get(`dialogs/messages/new/count`)
            .then(res => res.data)
    }


};





