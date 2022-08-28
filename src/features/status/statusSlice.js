import {createSlice} from "@reduxjs/toolkit";

// const initialState = 'All';

export const statusSlice = createSlice({
    name: 'status',
    initialState: 'All',
    reducers: {
        changeStatus: (state, action) => {
            return action.payload;
        },
    },
});

export const { changeStatus } = statusSlice.actions;

export const selectStatus = (state) => state.status;

export default statusSlice.reducer;