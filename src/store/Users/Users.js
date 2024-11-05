// ************ make example rudex when it can example code used
import {createSlice} from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: 'users',
    initialState:{ 
        usersList: null,
        createResponse: null,
        detailResponse: null,
        updateResponse: null,
        deleteResponse: null,
        loading: false,
    },
    reducers: {
      usersListReducer(state, payload) {
        state.usersList = payload.payload
      },
      createResponseReducer(state, payload){
        state.createResponse = payload.payload
      },
      getDetailResponseReducer(state, payload){
        state.detailResponse = payload.payload
      },
      updateResponseReducer(state, payload){
        state.updateResponse = payload.payload 
      },
      deleteResponseReducer(state, payload){
        state.deleteResponse = payload.payload
      },
      loadingReducer(state, payload){
        state.loading = payload.payload;
      }
    },
})

export const {
  usersListReducer, 
  createResponseReducer,
  getDetailResponseReducer,
  updateResponseReducer,
  deleteResponseReducer,
  loadingReducer
} = usersSlice.actions;
export default usersSlice;