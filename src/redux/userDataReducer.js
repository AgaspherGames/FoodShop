import { createSlice } from "@reduxjs/toolkit";
import { ApiPutUserData } from "../api/api";

const initialState = {
  data: [],
  isAuth: false,
  isProductsLoaded: false,
}

export const userDataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data = [...action.payload]
    },
    setCart: (state, action)=> {
      if (action.payload[1]<=0) {
        delete state.data[0].cart[action.payload[0]];
      }
      else state.data[0].cart[action.payload[0]]=action.payload[1]
      ApiPutUserData(state.data[0].likes, state.data[0].cart)
    },
    setLike: (state, action) => {
      if (action.payload[0]) state.data[0].likes = [...state.data[0].likes, Number(action.payload[1])]
      else state.data[0].likes.splice(state.data[0].likes.indexOf(action.payload[1]),1)
      ApiPutUserData(state.data[0].likes, state.data[0].cart)
      
    },
    setIsAuth: (state, action)=>{
      state.isAuth = true
    },
    setIsProductsLoaded: (state, action) => {
      state.isProductsLoaded = true
    }

  }
})

export const { setUserData, setIsAuth, setIsProductsLoaded, setCart, setLike } = userDataSlice.actions

export default userDataSlice.reducer