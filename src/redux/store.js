import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsReducer';
import userDataReducer from './userDataReducer';



let store =  configureStore({
  reducer:{
    products: productsReducer,
    userData: userDataReducer,
  },
});

window.store = store

export default store
