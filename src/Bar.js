import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCars, fetchPriceAsc, fetchYear, fetchMake } from "./actions";

export function Bar(props) {
    const dispatch = useDispatch();
    return (
        <div id="nav-bar">
            <Link id="home-button" to={`/cars`} onClick={() => dispatch(fetchCars())}><b>All Cars</b></Link>
            <Link id="home-button" to={`/cars/price-asc`} onClick={() => dispatch(fetchPriceAsc())}><b>Search By Price</b></Link>
            <Link id="home-button" to={`/cars/year`} onClick={() => dispatch(fetchYear())}><b>Search By Year</b></Link>
            <Link id="home-button" to={`/cars/make`} onClick={() => dispatch(fetchMake())}><b>Search By Make</b></Link>
        </div>
            
    );
}