import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as bip39 from "bip39";

interface WalletState {
  password: string | null;
  isUnderstand: boolean;
  recoveryPhrase: string | null;
  verificationIndices: number[];
  selectedWords: string[];
  isVerified: boolean | null;
  shuffledRecoveryPhrase: string[];
}

const initialState: WalletState = {
  password: null,
  isUnderstand: false,
  recoveryPhrase: null,
  verificationIndices: [],
  selectedWords: [],
  isVerified: null,
  shuffledRecoveryPhrase: [],
};

const walletCreateSlice = createSlice({
  name: "walletCreate",
  initialState,
  reducers: {
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setIsUnderstand(state, action: PayloadAction<boolean>) {
      state.isUnderstand = action.payload;
    },
    setRecoveryPhrase(state) {
      const mnemonic = bip39.generateMnemonic();
      state.recoveryPhrase = mnemonic;
      state.shuffledRecoveryPhrase = mnemonic
        .split(" ")
        .sort(() => Math.random() - 0.5);
    },
    setVerificationIndices(
      state,
      action: PayloadAction<{ size: number; range: number }>
    ) {
      const { size, range } = action.payload;
      state.verificationIndices = Array.from({ length: range }, (_, i) => i)
        .sort(() => Math.random() - 0.5)
        .slice(0, size);
    },
    toggleWordSelection(state, action: PayloadAction<string>) {
      const word = action.payload;
      const isLastSelected =
        state.selectedWords[state.selectedWords.length - 1] === word;

      if (isLastSelected) {
        state.selectedWords.pop();
      } else if (
        state.selectedWords.length < state.verificationIndices.length
      ) {
        state.selectedWords.push(word);
      }
    },
    verifyMnemonic(state) {
      const correctWords = state.verificationIndices.map(
        (i) => state.recoveryPhrase?.split(" ")[i]
      );

      const isCorrect = correctWords?.every(
        (word, i) => word === state.selectedWords[i]
      );

      state.isVerified = isCorrect ? true : false;

      if (!isCorrect) {
        state.selectedWords = [];
      }
    },
    reset: () => initialState,
  },
});

export const {
  reset,
  setPassword,
  setIsUnderstand,
  setRecoveryPhrase,
  setVerificationIndices,
  toggleWordSelection,
  verifyMnemonic,
} = walletCreateSlice.actions;

export default walletCreateSlice.reducer;
