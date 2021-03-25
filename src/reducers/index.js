import { combineReducers } from "redux";
import detailsReducer from "./details-reducer";
import loadReducer from "./load-reducer";

const rootReducer = combineReducers({
    load: loadReducer,
    details: detailsReducer
});

export default rootReducer;