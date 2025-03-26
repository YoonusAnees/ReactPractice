import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 user : null,
};    

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
    
      state.user = {name:"001"};
    },
    logout: (state) => {
      state.user = null;
    },
  
  },
})


export const { login, logout } = userSlice.actions

export default userSlice.reducer