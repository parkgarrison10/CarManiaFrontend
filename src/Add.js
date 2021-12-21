import {useState} from 'react';
import { useDispatch} from "react-redux";
import { addCar, doneAdd } from "./actions";


export function Add(props) {
    const dispatch = useDispatch();

    const [vin, setVin] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [miles, setMiles] = useState('');
    const [link, setLink] = useState('');

    return (
        <div>
                <h3>Add A Car</h3>
                <form>
                    <div id="inputs">
                        <h5>VIN: <input id="vin-input" type="text" value={vin}          onChange={event => setVin(event.target.value)}></input></h5>
                        <h5>Make: <input id="make-input" type="text" value={make}       onChange={event => setMake(event.target.value)}></input></h5>
                        <h5>Model: <input id="model-input" type="text" value={model}    onChange={event => setModel(event.target.value)}></input></h5>
                        <h5>Year: <input id="year-input" type="number" value={year}       onChange={event => setYear(event.target.value)}></input></h5>
                        <h5>Color: <input id="color-input" type="text" value={color}    onChange={event => setColor(event.target.value)}></input></h5>
                        <h5>Miles: <input id="miles-input" type="number" step="any" value={miles}    onChange={event => setMiles(event.target.value)}></input></h5>
                        <h5>Price: <input id="price-input" type="number" step="any" value={price}    onChange={event => setPrice(event.target.value)}></input></h5>
                        <h5>Image Link: <input id="link-input" type="url" value={link} onChange={event => setLink(event.target.value)}></input></h5>
                    </div>
                    <div id="add-buttons">
                        <button class="add-buttons" onClick={(ev) => {
                            ev.preventDefault();
                            ev.stopPropagation();
                            dispatch(addCar(vin, make, model, year, color, miles, price, link))}
                        }>Add</button>
                        <button class="add-buttons" onClick={(ev) => {
                            ev.preventDefault();
                            ev.stopPropagation();
                            dispatch(doneAdd())}
                        }>Cancel</button>
                    </div>
                </form>
            </div>
    );
}