import { createStore } from "redux";
import Reducer from "./RootReducer";

const Store = createStore(Reducer);
export default Store;