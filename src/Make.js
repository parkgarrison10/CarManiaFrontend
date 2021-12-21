
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMake, addMenu } from "./actions";
import { Add } from "./Add";
import { Edit } from "./Edit";
import { Select } from "./Select";

export function Make (props)
{
    const cars = useSelector((state) => state.cars);
    const add = useSelector((state) => state.add);
    const make = useSelector((state) => state.make);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchMake());
        console.log("dispatch to fetch cars");
    }, [dispatch]);
    return (
        <div id="body">
            <div id="background">
                <h1>CarMania Admin App</h1>
                
                {!make && 
                    <div>
                        <Select />
                    </div>
                }
                {make && <>
                    <h2>Search By Make</h2>
                    {!add && <button onClick={() => dispatch(addMenu())}>Add New Car</button>}
                    {add && <Add />}
                    <button onClick={(ev) => {
                            ev.preventDefault();
                            ev.stopPropagation();
                            dispatch(fetchMake())}
                    }>Search Other Makes</button>
                    <div id="cars">
                        {cars.map((car) => (
                            <div id="car" key={car.id}>
                                <img id="cars-image" src={car.link} alt={car.model} width="310"></img>
                                <div id="cars-elements">
                                    <Link to={`/cars/${car.vin}`}>{car.year} {car.make} {car.model}</Link>
                                    <h4>${car.price}</h4>
                                    <p>Miles: {car.miles}</p>
                                    <Edit car={car}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </>}


                
            </div>
        </div>
    );
}