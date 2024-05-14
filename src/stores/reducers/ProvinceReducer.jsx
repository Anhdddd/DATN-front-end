import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    provinces: [],
};

const provinceSlice = createSlice({
    name: "province",
    initialState,
    reducers: {
        setProvinces(state, action) {
            state.provinces = action.payload;
        },
    },
});

export const { setProvinces } = provinceSlice.actions;

export default provinceSlice.reducer;