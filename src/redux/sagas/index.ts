import { all } from 'redux-saga/effects'
import emailStoreSaga from './emailStoreSaga'
export default function* watchAll() {
    yield all([
        emailStoreSaga()
    ])
}