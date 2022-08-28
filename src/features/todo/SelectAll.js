import {useDispatch} from "react-redux";
import {selectAll} from "./todoSlice";

export function SelectAll() {
    const dispatch = useDispatch();

    return <span onClick={() => dispatch(selectAll())}>⌄</span>;
}
