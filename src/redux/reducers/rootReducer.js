import { todo } from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todo
});

export default rootReducer;