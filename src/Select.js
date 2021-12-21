
import { useDispatch, useSelector } from "react-redux";
import { fetchMakes } from "./actions";
import {useState} from 'react';


export function Select(props) {
    const makes = useSelector((state) => state.makes);
    const [selected, setMake] = useState('');
    const dispatch = useDispatch();
    return (
        <>
            <label for="makes"><h3>Choose a Make</h3></label>
            <select name="makes" id="makes" onChange={event => setMake(event.target.value)}>
                <option value={-1}>- - - - - - - - - -</option>
                {makes.map((make, index) => (
                    <option value={make.make} key={index}>{make.make}</option>
                ))}
            </select>
            {console.log("Selected", selected)}
            <button onClick={(ev) => {
                            ev.preventDefault();
                            ev.stopPropagation();
                            dispatch(fetchMakes(selected))}
            }>Search</button>
        </>
    );
}