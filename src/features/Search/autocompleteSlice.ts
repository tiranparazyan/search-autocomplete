import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { data, initialSearch, SearchProps } from "../../DB/db";
import { combineResults } from "../../helpers/autocomplete";

export interface AutoCompleteState {
  searchArray: SearchProps[];
  requestTime: string;
  searchWhileTypingList: SearchProps[];
}

const searchHistory = localStorage.getItem("searchHistory");

const initialState: AutoCompleteState = {
  searchArray: combineResults(
    searchHistory ? JSON.parse(searchHistory) : [],
    initialSearch
  ),
  requestTime: "",
  searchWhileTypingList: [],
};

export const autoCompleteSlice = createSlice({
  name: "autoComplete",
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<string>) => {
      const obj: SearchProps = {
        text: action.payload,
        location: "localStorage",
      };
      state.searchArray = combineResults([obj], state.searchArray);
    },
    removeFromHistory: (state, action: PayloadAction<string>) => {
      const filteredArray = state.searchArray.filter(
        ({ text }) => text !== action.payload
      );
      state.searchArray = combineResults(filteredArray, initialSearch);
    },
    searchByTyping: (state, action: PayloadAction<string>) => {
      if (action.payload === "") {
        return state;
      }

      const foundSearchResults = state.searchArray.filter(({ text }) =>
        text.toLowerCase().startsWith(action.payload.toLowerCase())
      );

      const foundDataResults = data
        .filter(({ title }) =>
          title.toLowerCase().startsWith(action.payload.toLowerCase())
        )
        .map(({ title }) => ({
          text: title,
          location:
            state.searchArray.find(({ text }) => text === title)?.location ||
            "db",
        }));

      const allResults = combineResults(foundSearchResults, foundDataResults);
      state.searchWhileTypingList = allResults;
    },
  },
});

export const { addToHistory, removeFromHistory, searchByTyping } =
  autoCompleteSlice.actions;

export const selectSearchArray = (state: RootState) =>
  state.autocomplete.searchArray;

export default autoCompleteSlice.reducer;
