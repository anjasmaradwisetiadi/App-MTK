// ************ make example rudex when it can example code used
import {createSlice} from '@reduxjs/toolkit'

const unknownSlice = createSlice({
    name: 'unknown',
    initialState:{ 
        unknownList: null,
        detailResponse: null,
        loading: false,
    },
    reducers: {
      unknownListReducer(state, payload) {
        state.unknownList = payload.payload
      },
      getDetailResponseReducer(state, payload){
        state.detailResponse = payload.payload
      },
      loadingReducer(state, payload){
        state.loading = payload.payload;
      }
    },
})

export const {
  unknownListReducer, 
  getDetailResponseReducer,
  loadingReducer
} = unknownSlice.actions;
export default unknownSlice;