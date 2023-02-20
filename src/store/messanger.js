import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usersList: [],
    dialogues: [],
    dialogue: {}
}

const messenger = createSlice({
    name: 'messenger',
    initialState,
    reducers: {
        setUsers: (state, { payload: users }) => {
            state.usersList = users
        },

        addUser: (state, { payload: user }) => {
            state.usersList.push(user)
        },
        setDialogues: (state, { payload: dialogues }) => {
            state.dialogues = dialogues
        },

        setDialogueByUserId: (state, { payload: userId }) => {
            if (userId > 0) {
                for (let i of state.dialogues) {
                    if (i.userId === userId) {
                        state.dialogue = i
                    }
                }
            } else {
                state.dialogue = {}
            }
        },

        sendMessage: (state, { payload: text }) => {
            if (Object.keys(state.dialogue).length && text) {
                for (let i = 0; i < state.dialogues.length; i++) {
                    if (state.dialogues[i].dialogueId === state.dialogue.dialogueId) {
                        const date = new Date()
                        state.dialogues[i].messages.push({
                            "text": text,
                            "time": `${date.getHours()}:${date.getMinutes()}`,
                            "isOutgoing": true
                        })

                        state.dialogue.messages.push({
                            "text": text,
                            "time": `${date.getHours()}:${date.getMinutes()}`,
                            "isOutgoing": true
                        })
                    }
                }
            }
        }
    }
})

export const { setUsers, addUser, setDialogues, setDialogueByUserId, sendMessage } = messenger.actions

export default messenger.reducer