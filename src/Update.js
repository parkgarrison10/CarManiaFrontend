import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateCar, updateMenu, doneUpdate, doneEdit } from "./actions";


export function Update(props) {
    console.log('update props', props)
    const dispatch = useDispatch();
    const {vin} = props;
    const update = useSelector((state) => state.update);

    const [price, setPrice] = useState('');

    return (
        <div id="update">
                {!update && <button onClick={() => dispatch(updateMenu())}>Update</button>}
                {update &&
                    <form>
                        <h5>New Price: <input id="price-input" type="number" step="any" value={price}    onChange={event => setPrice(event.target.value)}></input></h5>
                        <div id="update-buttons">
                            <button onClick={(ev) => {
                                ev.preventDefault();
                                ev.stopPropagation();
                                console.log("UPDATE", vin, price);
                                dispatch(updateCar(vin , price))}
                            }>Save</button>
                            <button onClick={(ev) => {
                                ev.preventDefault();
                                ev.stopPropagation();
                                dispatch(doneUpdate());
                                dispatch(doneEdit());}
                            }>Cancel</button>
                        </div>
                        
                    </form>
                }
            </div>
    );
}