import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'user',
    initialState:{
        mail: "",
        isLogin: false,
        history:[],
        error: null,
        token: null,
    },
    reducers:{
        userLoginResolve:(state, {payload})=>({
            ...state,
            isLogin: true,
            mail: payload.mail,
            history: payload.history,
            token: payload.token
        }),
        userLoginReject:(__,{payload})=>({
            error:payload,
        })
    }
});

export const {userLoginResolve,userLoginReject} = authSlice.actions;

export default authSlice.reducer;