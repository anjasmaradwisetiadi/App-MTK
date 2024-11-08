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

      userListFilterReducer(state, payload){

        // state.usersList = payload.payload
        let payloadUserList = payload.payload.data
        let payloadUserParamsFilter = payload.payload.params_filter

        //********* */ calculate filter manual from FE
        let newPayloadUserList = payloadUserList.data.filter((item,index)=>{
          return item.first_name.trim().toLowerCase().includes(payloadUserParamsFilter.filter_first_name.trim().toLowerCase())
        })
        newPayloadUserList = newPayloadUserList.filter((item,index)=>item.last_name.trim().toLowerCase().includes(payloadUserParamsFilter.filter_last_name.trim().toLowerCase()))

        const newFilterResult ={
          "page": payloadUserList.page,
          "per_page": payloadUserList.per_page,
          "total": payloadUserList.total,
          "total_pages": payloadUserList.total_pages,
          "data": newPayloadUserList
        }
        state.usersList = newFilterResult
        tate.loading = false;
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
  userListFilterReducer,
  createUsersResponseReducer,
  getDetailUsersResponseReducer,
  updateUsersResponseReducer,
  deleteUsersResponseReducer,
  loadingReducer,
  loadingFormReducer
} = usersSlice.actions;
export default usersSlice;