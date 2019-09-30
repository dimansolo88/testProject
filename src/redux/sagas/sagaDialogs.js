import { put, takeEvery, call } from 'redux-saga/effects'
import {dialogsAPI} from "../../API/API";
import {GET_DIALOG_SAGA, getDialogsSuccessActionCreator} from "../dialogs-reducer";


export function* getDialogsSaga() {

    try {
        let res = yield call(dialogsAPI.getDialogs);
        yield put(getDialogsSuccessActionCreator(res))

    }
    catch (e) {
        console.log(e)
    }



}


//sagaWatcher
export function* dialogsSaga() {
    yield takeEvery (GET_DIALOG_SAGA, getDialogsSaga)
}














