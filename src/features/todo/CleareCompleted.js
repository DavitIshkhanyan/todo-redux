import {useDispatch, useSelector} from "react-redux";
import {clearCompleted, selectTodo} from "./todoSlice";

export function ClearCompleted() {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodo);
    const completedExists = todos.some(todo => todo.checked);

    return completedExists && <div className='border' onClick={() => dispatch(clearCompleted())}>Clear Completed</div>;
}