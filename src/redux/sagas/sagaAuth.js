import {put, takeEvery, call} from 'redux-saga/effects'
import {logInAPI} from "../../API/API";
import {authMe} from "../Auth-reducer";

export let LOG_OUT_SAGA = 'SN/LOGOUT_SAGA_AUTH';


export const logOut = () => ({
    type:LOG_OUT_SAGA
})


export function* logOutSAga() {
    try {
        let res = yield call (logInAPI.logOut);
        if (res.data.resultCode === 0) {
            yield put(authMe(null, null, null, false))
        }
    } catch (e) {
        console.log(e)
    }
}


export function* AuthSAga() {
    yield takeEvery (LOG_OUT_SAGA, logOutSAga)
}