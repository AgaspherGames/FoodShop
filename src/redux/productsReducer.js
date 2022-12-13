import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProduct: {},
  isSorted: false,
  sortedProducts: [],
  sortParams: 'name'
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = [...action.payload]
    },
    setSortedProducts: (state, action) => {
      state.sortedProducts = [...action.payload]
    },
    setSortParams: (state, action)=>{
      state.sortParams= action.payload
    },
    setIsSorted: (state, action) => {
      state.isSorted = action.payload
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload
    },
  }
})

export const { setProducts, setSortedProducts, setSortParams, setSelectedProduct } = productsSlice.actions

export default productsSlice.reducer