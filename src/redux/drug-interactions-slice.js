import { createSlice } from "@reduxjs/toolkit";
import data from "../interactions.json";

const initialState = {
  drugs: {},
};

export const drugInteractionsSlice = createSlice({
  name: "Drug Interactions",
  initialState,
  reducers: {
    fetchDrugInteractions: (state) => {
      console.log({ state, data });
    },
  },
});

export const { fetchDrugInteractions } = drugInteractionsSlice.actions;

export default drugInteractionsSlice.reducer;
