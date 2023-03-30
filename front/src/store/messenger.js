import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usersList: [],
    dialogues: [],
    currentDialog: {},
    selectedUserId: null
}

const messenger = createSlice({
    name: 'messenger',
    initialState,
    reducers: {
        setUsers: (state, { payload: users }) => {
            state.usersList = users
        },

        setDialogues: (state, { payload: dialogues }) => {
            state.dialogues = dialogues
        },

        setDialogueByUserId: (state, { payload: userId }) => {
            if (userId > 0) {
                for (let i of state.dialogues) {
                    if (i.dialogueId === userId || i.userId === userId) {
                        state.currentDialog = i
                    }
                }
            } else {
                state.currentDialog = {}
            }
        },

        sendMessage: (state, { payload: text }) => {
            if (Object.keys(state.currentDialog).length && text) {
                for (let i = 0; i < state.dialogues.length; i++) {
                    if (state.dialogues[i].dialogueId === state.currentDialog.dialogueId) {
                        const date = new Date()
                        state.dialogues[i].messages.push({
                            "text": text,
                            "time": `${date.getHours()}:${date.getMinutes()}`,
                            "isOutgoing": true
                        })

                        state.currentDialog.messages.push({
                            "text": text,
                            "time": `${date.getHours()}:${date.getMinutes()}`,
                            "isOutgoing": true
                        })
                    }
                }
            }
        },

        setSelectedUserId: (state, { payload: id }) => {
            state.selectedUserId = id
        }
    }
})

export const { setUsers, addUser, setDialogues, setDialogueByUserId, sendMessage, setSelectedUserId } = messenger.actions

export default messenger.reducer