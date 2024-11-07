// ************ make example rudex when it can example code used
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: 'users',
    initialState:{ 
        usersList: null,
        createResponse: null,
        detailResponse: null,
        updateResponse: null,
        deleteResponse: null,
        isFetched: false,
        loading: false,
        loadingForm: false,
        error:false
    },
    reducers: {
      usersListReducer(state, payload) {
        state.usersList = payload.payload
      },
      createUsersResponseReducer(state, payload){
        state.createResponse = payload.payload
      },
      getDetailUsersResponseReducer(state, payload){
        state.detailResponse = payload.payload
      },
      updateUsersResponseReducer(state, payload){
        state.updateResponse = payload.payload 
      },
      deleteUsersResponseReducer(state, payload){
        state.deleteResponse = payload.payload
      },
      loadingReducer(state, payload){
        state.loading = payload.payload;
      },
      loadingFormReducer(state, payload){
        state.loadingForm = payload.payload;
      }
    },
})

export const {
  usersListReducer, 
  userReducer,
  createUsersResponseReducer,
  getDetailUsersResponseReducer,
  updateUsersResponseReducer,
  deleteUsersResponseReducer,
  loadingReducer,
  loadingFormReducer
} = usersSlice.actions;
export default usersSlice;