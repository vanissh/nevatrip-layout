import { configureStore } from '@reduxjs/toolkit';
import { reducer as dataReducer } from '../slices/dataSlice';

const store = configureStore({
    reducer: { dataReducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;