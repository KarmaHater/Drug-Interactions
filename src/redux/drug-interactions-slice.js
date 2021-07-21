import { createSlice } from "@reduxjs/toolkit";
import data from "../interactions.json";

const initialState = {
  results: [],
};

export const drugInteractionsSlice = createSlice({
  name: "Drug Interactions",
  initialState,
  reducers: {
    fetchDrugInteractions: (state) => {
      state.results = data;
    },
  },
});

export const { fetchDrugInteractions } = drugInteractionsSlice.actions;

export default drugInteractionsSlice.reducer;
