import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bookMarks: [],
}

const bookMarkSlice = createSlice({
    name: 'bookMarkSlice',
    initialState,
    reducers : {
        addBookMarks : (state, {payload})=> {
            state.bookMarks.push(payload)
        }
    }
});

export const { addBookMarks} = bookMarkSlice.actions;
export default bookMarkSlice.reducer