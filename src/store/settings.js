import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {
        name: 'Julius',
        avatar: 'https://w7.pngwing.com/pngs/980/304/png-transparent-computer-icons-user-profile-avatar-heroes-silhouette-avatar.png',
        mail: 'julius@gmail.com',
        birthday: '29.05.1992'
    },
    settingPath: ''
}

const settings = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setUserData: (state, { payload: userData }) => {
            state.userData = userData
        },

        setSettingPath: (state, { payload: path }) => {
            state.settingPath = path
        },

        editUserData: (state, { payload: userData }) => {
            for (let i in userData) {
                // if (i && state.userData.hasOwnProperty(i)) {
                state.userData[i] = userData[i]
                // }
            }
        }
    }
})

export const { setUserData, setSettingPath, editUserData } = settings.actions
export default settings.reducer