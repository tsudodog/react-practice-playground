import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './../index'

export type EmailState = {
    emails: string[]
    currentEmail: string | null
}

const INITIAL_STATE: EmailState = {
    emails: ["alex.zalewski@icloud.com", "bark@woof.net"],
    currentEmail: null,
}

const emailSlice = createSlice({
    name: 'email',
    initialState: INITIAL_STATE,
    reducers: {
        setEmails: (state, action: PayloadAction<{ emails: string[] }>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.emails = [...state.emails, ...action.payload.emails]
        },
        setCurrentEmail: (state, action: PayloadAction<{ email: string }>) => {
            state.currentEmail = action.payload.email
        }
    }
})


export const { actions, reducer } = emailSlice

export const {
    setEmails,
    setCurrentEmail
} = actions

const getEmailSlice = (state: RootState) => state.email
export const getEmails = (state: any) => getEmailSlice(state).emails
export const getCurrentEmail = (state: RootState) => getEmailSlice(state).currentEmail

