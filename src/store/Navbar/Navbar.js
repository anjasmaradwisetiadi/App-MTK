// ************ make example rudex when it can example code used
import {createSlice} from '@reduxjs/toolkit'

const navbarSlice = createSlice({
    name: 'navbar',
    initialState:{ 
        isSidebarOpen: true,
        loading: false,
    },
    reducers: {
      sidebarOpenReducer(state, payload) {
        state.isSidebarOpen = payload.payload
      },

      loadingReducer(state, payload){
        state.loading = payload.payload;
      }
    },
})

export const {
  sidebarOpenReducer, 
  loadingReducer
} = navbarSlice.actions;
export default navbarSlice;