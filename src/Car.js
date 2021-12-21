import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchCar } from "./actions";
import { Edit } from "./Edit";

export function Car() {
  const params = useParams();
  const dispatch = useDispatch();
  

  useEffect(() => {
    console.log("params.vin", params.vin);
    dispatch(fetchCar(params.vin));
    
  }, [dispatch, params.vin]);
  const car = useSelector((state) => state.car);
  
  console.log(car, "here");
  return (
    <div id="body">
        <div id="car-display">
        {car.car && car.car.map((car) => (
          <>
            <div key={car.id}>
              <img id="car-single" src={car.link} alt={car.model}></img>
              <h1>{car.make} {car.model}</h1>
              <h2>{car.year}</h2>
              <h3>${car.price}</h3>
              <p>Miles: {car.miles}</p>
              <p>Color: {car.color}</p>
            </div>
            <Edit car={car}/>
          </>
          ))}
        </div>
    </div>
    
  );
}