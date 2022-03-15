import { createStore } from "vuex";
import connect from "./connect";
//import signer from './signer';

// Create a new store instance.
const store = createStore({
  modules: {
    connect,
    //    signer
  },
});

export default store;
