import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { data, DataProps } from "../../DB/db";
import { filterSearch } from "../../helpers/autocomplete";

export interface HistoryState {
  searchTerm: string;
  foundResults: DataProps[];
  searchDuration: number;
}

const initialState: HistoryState = {
  searchTerm: "",
  foundResults: [],
  searchDuration: 0,
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    saveSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
    findResults: (state, action: PayloadAction<string>) => {
      const startTime = performance.now();

      const foundItems = filterSearch(action.payload, data);

      const endTime = performance.now();
      const executionTime = endTime - startTime;
      state.searchDuration = +(executionTime / 1000).toFixed(4);

      state.foundResults = foundItems;
    },
  },
});

export const { saveSearchTerm, clearSearchTerm, findResults } =
  historySlice.actions;

export const selectSearchTerm = (state: RootState) => state.history.searchTerm;

export default historySlice.reducer;
