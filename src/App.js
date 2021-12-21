import "./App.css";
import { Cars } from "./Cars";
import { Car } from "./Car"; 
import { Year } from "./Year"; 
import { Make } from "./Make"; 
import { PriceAsc } from "./PriceAsc"
import { Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import { Bar } from "./Bar";

function App() {
  const isWaiting = useSelector((state) => state.isWaiting);
  return (
    <div className="App">
      <div id="nav-space">
       <Bar />
      </div>
      {isWaiting && <div className="spinner" />}
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:vin" element={<Car />} />
        <Route path="/cars/price-asc" element={<PriceAsc />}/>
        <Route path="/cars/year" element={<Year />} />
        <Route path="/cars/make" element={<Make />} />
      </Routes>
    </div>
  );
}

export default App;