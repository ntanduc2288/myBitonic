import { createStore } from "redux";
import Reducer from "./reducers/RootReducer";

const Store = createStore(Reducer);
export default Store;