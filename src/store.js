import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Action } from "./actions";

const initialState = {
  cars: [],
  car:[],
  makes: [],
  add: false,
  edit: -1,
  make: false,
  update: false,
  isWaiting: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case Action.LoadedCars:
        return {
            ...state,
            cars: action.payload,
        };
    case Action.LoadedCar:
        console.log("here", action.payload);
        return {
            ...state,
            car: action.payload,
        };
    case Action.LoadedMake:
      return {
          ...state,
          makes: action.payload,
      };
    case Action.ClearCars:
      return {
        ...state,
        cars: [],
    };
    case Action.ClearCar:
        return {
          ...state,
          car: [],
      };
    case Action.StartedWaiting:
      return {
        ...state,
        isWaiting: true,
      };
    case Action.StoppedWaiting:
      return {
        ...state,
        isWaiting: false,
      };
    case Action.isAdding:
      return {
        ...state,
        add: true,
      };
    case Action.doneAdding:
      return {
        ...state,
        add: false,
      };
    case Action.isEditing:
      return {
        ...state,
        edit: action.payload,
      };
    case Action.doneEditing:
      return {
        ...state,
        edit: -1,
      };
    case Action.isUpdating:
      return {
        ...state,
        update: true,
      };
    case Action.doneUpdating:
      return {
        ...state,
        update: false,
      };
    case Action.resetSelect:
      return {
        ...state,
        make: false,
      };
    case Action.doneSelecting:
      return {
        ...state,
        make: true,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));