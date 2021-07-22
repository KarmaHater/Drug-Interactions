import { createSlice } from "@reduxjs/toolkit";
import { getDrugMostServerInteractions } from "../utils/get-drug-interactions";

const initialState = {
  results: [],
};

export const drugInteractionsSlice = createSlice({
  name: "Drug Interactions",
  initialState,
  reducers: {
    fetchDrugInteractions: (state, { payload }) => {
      state.results = getDrugMostServerInteractions(payload);
    },
  },
});

export const { fetchDrugInteractions } = drugInteractionsSlice.actions;

export default drugInteractionsSlice.reducer;
