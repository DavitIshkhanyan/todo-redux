import {useDispatch} from "react-redux";
import {changeStatus} from "../status/statusSlice";
import {CountTodo} from "./CountTodo";
import {ClearCompleted} from "./CleareCompleted";

export function TodoNav() {
    const dispatch = useDispatch();

    // const status = useSelector(selectStatus);

    function change(e) {
        // e.target.dataset.value;
        dispatch(changeStatus(e.target.dataset.value));
    }

    return (
        <div className='nav-container'>
            <CountTodo/>
            <div className='flex'>
                <div>
                    {/*<input type="checkbox"/>*/}
                    <p className='border' data-value='All' onClick={change}>All</p>
                </div>
                <div>
                    <p className='border' data-value='Active' onClick={change}>Active</p>
                </div>
                <div>
                    <p className='border' data-value='Completed' onClick={change}>Completed</p>
                </div>
            </div>
            <ClearCompleted />
        </div>
    );
}

// <div className='flex' onClick={change}>
//     <input type="radio" id='All' className='' checked/>
//     <label className='border' htmlFor='All' onClick={change}>All</label>
// </div>
// <div className='flex'>
//     <input type="radio" id='Active' className='hide'/>
//     <label className='border' htmlFor='Active' onClick={change}>Active</label>
// </div>
// <div className='flex'>
//     <input type="radio" id='Checked' className='hide'/>
//     <label className='border' htmlFor='Checked' onClick={change}>Checked</label>
// </div>