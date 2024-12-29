import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WalletState {
  name: string | null;
  address: string | null;
}

const initialState: WalletState = {
  name: null,
  address: null,
};

const loadWalletFromLocalStorage = (): WalletState => {
  const walletData = localStorage.getItem('wallet');
  if (walletData) {
    return JSON.parse(walletData);
  }
  return initialState;
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState: loadWalletFromLocalStorage(),
  reducers: {
    setWallet: (state, action: PayloadAction<{ name: string; address: string }>) => {
      state.name = action.payload.name;
      state.address = action.payload.address;
      localStorage.setItem('wallet', JSON.stringify(state));
    },
    clearWallet: (state) => {
      state.name = null;
      state.address = null;
      localStorage.removeItem('wallet');
    },
  },
});

export const { setWallet, clearWallet } = walletSlice.actions;
export default walletSlice.reducer;
