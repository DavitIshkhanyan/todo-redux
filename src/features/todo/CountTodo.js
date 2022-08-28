import {useSelector} from "react-redux";
import {selectTodo} from "./todoSlice";

export function CountTodo() {
    const todos = useSelector(selectTodo);
    let c = todos.reduce( (count, todo) => todo.checked ? count: count+1, 0 );

    return <div>{c}</div>;
}