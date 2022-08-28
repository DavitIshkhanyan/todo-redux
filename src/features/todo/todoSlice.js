import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({
                id: action.payload.id,
                text: action.payload.text,
                checked: false,
            });
        },
        changeStatus: (state, action) => {
            state.forEach(todo => {
                if (todo.id === action.payload) {
                    todo.checked = !todo.checked;
                }
            });
        },
        remove: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        selectAll: (state, action) => {
            const unCheckedExists = state.some(todo => !todo.checked);
            if (unCheckedExists) {
                state.forEach(todo => {
                    todo.checked = true;
                });
            } else {
                state.forEach(todo => {
                    todo.checked = false;
                });
            }
        },
        clearCompleted: (state, action) => {
            return state.filter(todo => !todo.checked);
        },
    },
});

export const {add, changeStatus, remove, selectAll, clearCompleted} = todoSlice.actions;

export const selectTodo = (state) => state.todo;

export default todoSlice.reducer;