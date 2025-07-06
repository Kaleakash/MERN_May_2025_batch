import { legacy_createStore as createStore} from 'redux'
import reducer from "./reducer";

// all initialState variable is part of store. 

let storeRef = createStore(reducer);

export default storeRef;   