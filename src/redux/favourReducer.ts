import {createSlice} from '@reduxjs/toolkit'

type FavourType = {
    count: number
}

export const initialState: FavourType = {
    count: 0,
} 

export const favourSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        addFavour: (state,action) => ({
            ...state,
            count: state.count + 1,
        }),
    },
})
export const {addFavour} = favourSlice.actions

export default favourSlice.reducer