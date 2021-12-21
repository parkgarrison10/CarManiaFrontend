
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCars, addMenu } from "./actions";
import { Add } from "./Add";
import { Edit } from "./Edit";

export function Cars (props)
{
    const cars = useSelector((state) => state.cars);
    const add = useSelector((state) => state.add);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchCars());
        console.log("dispatch to fetch cars");
    }, [dispatch]);
    return (
        <div id="body">
            <div id="background">
                <h1>CarMania Admin App</h1>
                {!add && <button onClick={() => dispatch(addMenu())}>Add New Car</button>}
                {add && <Add />}
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
            </div>
        </div>
    );
}
