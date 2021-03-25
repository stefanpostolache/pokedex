import { combineReducers } from "redux";
import loadReducer from "./load-reducer";

const rootReducer = combineReducers({
    load: loadReducer
});

export default rootReducer;