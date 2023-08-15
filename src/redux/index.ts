import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
// configureReduxStore
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware] })

sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof store.getState>
export default store