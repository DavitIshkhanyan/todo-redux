import {useDispatch, useSelector} from "react-redux";
import {add, selectTodo} from "./todoSlice";
import {useState} from "react";
import {TodoInput} from "./TodoInput";
import {TodoElements} from "./TodoElements";
import {TodoNav} from "./TodoNav";


export function Todo() {
    return (
        <>
            <TodoInput />
            <TodoElements />
            <TodoNav />
        </>
    );
}