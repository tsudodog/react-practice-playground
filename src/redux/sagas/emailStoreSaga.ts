import { put, takeEvery, } from 'redux-saga/effects'
import { setCurrentEmail, setEmails } from '../reducers/emailStore'

function* appendDataToEmails(action: ReturnType<typeof setCurrentEmail>) {

    console.log(`LogoutDataSaga Called: ${action.payload.email}`)
    yield put(setEmails({ emails: [action.payload.email] }))

}

function* appendDataToEmailsSaga() {
    yield takeEvery(setCurrentEmail.type, appendDataToEmails)
}


export default appendDataToEmailsSaga