import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import historyReducer from "../features/SearchPage/searchSlice";
import autoCompleteReducer from "../features/Search/autocompleteSlice";

export const store = configureStore({
  reducer: {
    history: historyReducer,
    autocomplete: autoCompleteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
