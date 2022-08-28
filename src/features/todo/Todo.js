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