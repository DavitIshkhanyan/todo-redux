import {useDispatch} from "react-redux";
import {add} from "./todoSlice";
import {useState} from "react";
import {SelectAll} from "./SelectAll";

export function TodoInput() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const onAdd = () => {
        if (text === '') return;
        dispatch(add({id: Date.now(), text}));
        setText('');
    };

    const onEnter = (e) => {
        if (e.key === 'Enter' && text !== '') {
            onAdd();
        }
    }

    const onInput = (e) => setText(e.target.value);

    return (
        <div>
            <div>TODO</div>
            <SelectAll />
            <input type='text' value={text} onInput={ onInput } onKeyDown={ onEnter }  />
            <button onClick={ onAdd } >Add</button>
        </div>
    );
}