import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WalletState {
  name: string | null;
  address: string | null;
}

const initialState: WalletState = {
  name: null,
  address: null,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWallet: (
      state,
      action: PayloadAction<{ name: string; address: string }>
    ) => {
      state.name = action.payload.name;
      state.address = action.payload.address;
    },
    clearWallet: (state) => {
      state.name = null;
      state.address = null;
    },
  },
});

export const { setWallet, clearWallet } = walletSlice.actions;
export default walletSlice.reducer;
