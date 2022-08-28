import {useDispatch, useSelector} from "react-redux";

import { selectTodo, changeStatus, remove} from "./todoSlice";
import {selectStatus} from "../status/statusSlice";

export function TodoElements() {
    const todos = useSelector(selectTodo);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    function handleTodoChange(e) {
        if (e.target.type === 'checkbox') {
            dispatch(changeStatus(+e.target.parentElement.dataset.key));
        }
    }

    return (
        <div>
            {todos
                .filter(( todo ) => {
                    switch (status) {
                        case 'Active':
                            return !todo.checked;
                        case 'Completed':
                            return todo.checked;
                        default:
                            return todo;
                    }
                })
                .map(( todo ) => {
                    return (
                        <div key={todo.id} data-key={todo.id}>
                            <input type='checkbox' checked={todo.checked} onChange={handleTodoChange} />
                            <span className={todo.checked ? 'line-through' : ''}>{todo.text}</span>
                            <span onClick={() => dispatch(remove(+todo.id))}> x </span>
                        </div>
                    );
                })
            }
        </div>
    );
}