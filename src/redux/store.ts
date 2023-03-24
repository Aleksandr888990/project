import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './likeReducer'
import favourReducer from './favourReducer'


export const store = configureStore({
    reducer: {
        productsLikeState: likeReducer,
        favourites: favourReducer,

    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
