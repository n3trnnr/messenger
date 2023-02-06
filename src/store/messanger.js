import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usersList: [],
    chats: {
        id1: {
            text: 'some text',
            time: '15-55',
            userId: '1',
            dialogId: ''
        },
        id2: {
            text: 'some text',
            time: '15-55',
            userId: '2',
            dialogId: ''
        },
        id3: {
            text: 'some text',
            time: '15-55',
            userId: '3',
            dialogId: ''
        }
    }
}

const messenger = createSlice({
    name: 'messenger',
    initialState,
    reducers: {
        setUsers: (state, { payload }) => {
            state.usersList = payload
        },

        addUser: (state, { payload }) => {
            state.usersList.push(payload)
        }
    }
})

export const { setUsers, addUser } = messenger.actions

export default messenger.reducer