import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { configure } from '@testing-library/react';
import counterSlice from './counter'
import authSlice from './auth'

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export default store;