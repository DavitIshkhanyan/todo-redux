import {useSelector} from "react-redux";
import {selectTodo} from "./todoSlice";


export function TodoElements() {
    const todos = useSelector(selectTodo);
    console.log(todos);
    return (
        <div>
            {todos.map((todo) =>
                <div key={todo.id}>
                    <span>{todo.text}</span>
                    <input type='checkbox' />
                </div>

            )}
        </div>
    );
}