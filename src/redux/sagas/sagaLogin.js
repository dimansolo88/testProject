import { put, takeEvery } from 'redux-saga/effects'
import {dialogsAPI} from "../../API/API";
import {GET_DIALOG_SAGA, getDialogsSuccessActionCreator} from "../dialogs-reducer";


export function* getDialogsSaga() {


    let res = yield dialogsAPI.getDialogs();
    yield put(getDialogsSuccessActionCreator(res))

}


//sagaWatcher
export function* dialogsSaga() {
    yield takeEvery(GET_DIALOG_SAGA, getDialogsSaga)
}









