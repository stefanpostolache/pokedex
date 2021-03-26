import { combineReducers } from "redux";
import loadReducer from "./load-reducer";
import selectReducer from "./select-reducer";

const rootReducer = combineReducers({
    load: loadReducer,
    details: selectReducer
});

export default rootReducer;