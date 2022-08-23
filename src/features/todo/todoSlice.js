import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action) => {
            state.push({
                id: action.payload.id,
                text: action.payload.text,
                checked: false,
            });
        }
    },
});

export const { add } = todoSlice.actions;

export const selectTodo = (state) => state.todo;

export default todoSlice.reducer;