import { configureStore } from "@reduxjs/toolkit";
import drugInteractionsSlice from "./drug-interactions-slice";

export const store = configureStore({
  reducer: {
    drugInteractions: drugInteractionsSlice,
  },
});
