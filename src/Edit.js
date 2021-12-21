import { Update } from "./Update"
import { useDispatch, useSelector } from "react-redux";
import { deleteCar, editMenu } from "./actions";


export function Edit(props) {
    const edit = useSelector((state) => state.edit);
    const dispatch = useDispatch();
    const {car} = props;
    return (
        <>
            {edit !== car.id && <button onClick={() => dispatch(editMenu(car.id))}>Edit</button>}
            {edit === car.id &&
                <div>
                    <Update vin={car.vin}/>
                    <button onClick={() => 
                        dispatch(deleteCar(car.id))}>Delete</button>
                </div>
            }
        </>
    );
}