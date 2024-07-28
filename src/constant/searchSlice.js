import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        items: [],
    },
    reducers: {
        addWords: (state, action) => {
            state.items.push(action.payload);
        },

        clearWords: (state, action) => {
            return { items: [] };
        },
    },
});

export const { addWords, clearWords } = searchSlice.actions;

export default searchSlice.reducer;
