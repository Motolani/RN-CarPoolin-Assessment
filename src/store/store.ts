import { combineReducers, createStore } from "redux";
import deliveryReducer from "./deliveryReducer";


const rootReducer = combineReducers({
    deliveryData : deliveryReducer
})

export const store = createStore(rootReducer)