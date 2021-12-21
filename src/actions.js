export const Action = Object.freeze({
    StartedWaiting:"StartedWaiting",
    StoppedWaiting: "StoppedWaiting",
    LoadedCars: "LoadedCars",
    LoadedCar: "LoadedCar",
    isAdding: "isAdding",
    doneAdding: "doneAdding",
    isEditing: "isEditing",
    doneEditing: "doneEditing",
    isUpdating: "isUpdating",
    doneUpdating: "doneUpdating",
    ClearCar: "ClearCar",
    ClearCars: "ClearCars",
    doneSelecting: "doneSelecting",
    resetSelect: "resetSelect",
    LoadedMake: "LoadedMake"
  });
  
  export function loadedCars(cars) {
    return {type: Action.LoadedCars, payload: cars};
  }

  export function loadedCar(car) {
    return {type: Action.LoadedCar, payload: {car}};
  }

  export function loadedMakes(makes) {
    return {type: Action.LoadedMake, payload: makes};
  }

  export function clearCar() {
    console.log("Clearing car");
    return {type: Action.ClearCar};
  }

  export function clearCars() {
    console.log("Clearing cars");
    return {type: Action.ClearCars};
  }
  
  export function showProgress() {
    return {type: Action.StartedWaiting};
  }
  
  export function hideProgress() {
    return {type: Action.StoppedWaiting};
  }

  export function addMenu() {
    console.log("Opening add menu");
    return {type: Action.isAdding};
  }

  export function doneAdd() {
    console.log("Closing add menu");
    return {type: Action.doneAdding};
  }

  export function editMenu(id) {
    console.log("Opening edit menu");
    return {type: Action.isEditing, payload:id};
  }

  export function doneEdit() {
    console.log("Closing edit menu");
    return {type: Action.doneEditing};
  }

  export function updateMenu() {
    console.log("Opening update menu");
    return {type: Action.isUpdating};
  }

  export function doneUpdate() {
    console.log("Closing update menu");
    return {type: Action.doneUpdating};
  }

  export function resetSelect() {
    console.log("Opening update menu");
    return {type: Action.resetSelect};
  }

  export function doneSelecting() {
    console.log("Closing update menu");
    return {type: Action.doneSelecting};
  }
  
  function assertResponse(response) {
    if (response.status >= 200 || response.status < 300) {
      return response;
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  }
  
  export function fetchCars() {
    console.log('fetchCars')
    return (dispatch) => {
      dispatch(showProgress());
      dispatch(clearCar());
      fetch('https://project2.parkergarrisonwebdev.me:8443/car')
        .then(assertResponse)
        .then((response) => response.json())
        .then((data) => {
          dispatch(loadedCars(data.results));
          dispatch(hideProgress());
          dispatch(doneEdit());
          dispatch(doneUpdate());
          dispatch(doneAdd());
        })
        .catch(rejected => { 
            console.log(rejected);
        });
    };
  }

  export function fetchPriceAsc() {
    console.log('priceAsc');
    return (dispatch) => {
      dispatch(showProgress());
      dispatch(clearCars());
      fetch('https://project2.parkergarrisonwebdev.me:8443/car/price-asc')
        .then(assertResponse)
        .then((response) => response.json())
        .then((data) => {
          console.log("here", data);
          dispatch(loadedCars(data.results));
          dispatch(hideProgress());
          dispatch(doneEdit());
          dispatch(doneUpdate());
          dispatch(doneAdd());
        })
        .catch(rejected => { 

            console.log("here2", rejected);
        });
    };
  }

  export function fetchYear() {
    console.log('priceYear');
    return (dispatch) => {
      dispatch(showProgress());
      dispatch(clearCars());
      fetch('https://project2.parkergarrisonwebdev.me:8443/car/year')
        .then(assertResponse)
        .then((response) => response.json())
        .then((data) => {
          console.log("here", data);
          dispatch(loadedCars(data.results));
          dispatch(hideProgress());
          dispatch(doneEdit());
          dispatch(doneUpdate());
          dispatch(doneAdd());
        })
        .catch(rejected => { 

            console.log("here2", rejected);
        });
    };
  }

  export function fetchMake() {
    console.log('fetchMake');
    return (dispatch) => {
      dispatch(showProgress());
      dispatch(resetSelect());
      dispatch(clearCars());
      fetch('https://project2.parkergarrisonwebdev.me:8443/make')
        .then(assertResponse)
        .then((response) => response.json())
        .then((data) => {
          console.log("here", data);
          dispatch(loadedMakes(data.results));
          dispatch(hideProgress());
          dispatch(doneEdit());
          dispatch(doneUpdate());
          dispatch(doneAdd());
        })
        .catch(rejected => { 

            console.log("here2", rejected);
        });
    };
  }

  export function fetchMakes(make) {
    console.log('fetchMakes');
    return (dispatch) => {
      dispatch(showProgress());
      dispatch(doneSelecting());
      dispatch(clearCars());
      fetch(`https://project2.parkergarrisonwebdev.me:8443/make/${make}`)
        .then(assertResponse)
        .then((response) => response.json())
        .then((data) => {
          console.log("here", data);
          dispatch(loadedCars(data.results));
          dispatch(hideProgress());
          dispatch(doneEdit());
          dispatch(doneUpdate());
          dispatch(doneAdd());
        })
        .catch(rejected => { 

            console.log("here2", rejected);
        });
    };
  }

  export function fetchCar(vin) {
    console.log('fetchCar', vin);
    return (dispatch) => {
        dispatch(showProgress());
    fetch(`https://project2.parkergarrisonwebdev.me:8443/car/${vin}`)
        .then(assertResponse)
        .then((response) => response.json())
        .then((data) => {
          dispatch(loadedCar(data.results));
          console.log(data.results);
              dispatch(hideProgress());
        })
        .catch(rejected => {
            console.log(rejected);
        });
    };
  }

  export function deleteCar(id) {
    return (dispatch) => {
      const options = {
        method: 'DELETE',
      };
      console.log("id", id);
      dispatch(showProgress());
      fetch(`https://project2.parkergarrisonwebdev.me:8443/car/${id}`, options)
        .then((response) => response.json())
        .then((ok) => {
              dispatch(hideProgress());
              dispatch(fetchCars());
              dispatch(doneEdit());
        })
        .catch(rejected => {
          console.log(rejected);
      });
    };
  }

  export function addCar(vin, make, model, year, color, miles, price, link) {
    console.log("Adding Car", vin);
    return (dispatch) => {
      const car = {
        vin,
        make,
        model,
        year,
        color,
        miles,
        price,
        link,
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
      };
      console.log("car", car);
      dispatch(showProgress());
      fetch(`https://project2.parkergarrisonwebdev.me:8443/car`, options)
        .then((response) => response.json())
        .then((ok) => {
              dispatch(hideProgress());
              dispatch(fetchCars());
              dispatch(doneAdd());
        })
        .catch(rejected => {
          console.log(rejected);
      });
    };
  }

  export function updateCar(vin, price) {
    console.log(vin, price);
    return (dispatch) => {
      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({price}),
      };
      dispatch(showProgress());
      fetch(`https://project2.parkergarrisonwebdev.me:8443/car/${vin}`, options)
        .then((response) => response.json())
        .then((ok) => {
              dispatch(hideProgress());
              console.log("Done DId");
              dispatch(doneUpdate());
              dispatch(doneEdit());
              dispatch(fetchCar(vin));
              dispatch(fetchCars());
        })
        .catch(rejected => {
          console.log(rejected);
      });
    };
  }