import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import walletReducer from "./walletSlice";
import walletCreateeducer from "./walletCreateSlice";

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    wallet: walletReducer,
    walletCreate: walletCreateeducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;