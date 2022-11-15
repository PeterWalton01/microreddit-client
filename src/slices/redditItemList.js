import { createSlice } from "@reduxjs/toolkit";

const redditItems = createSlice({
  name: "redditItems",
  initialState: { trigger: "/r/home", criteria: "" },
  reducers: {
    refreshItems: (state, action) => {
      state.trigger = action.payload;
    },
    refreshCriteria: (state, action) => {
      state.criteria = action.payload;
    },
  },
});

export const { refreshItems, refreshCriteria } = redditItems.actions;

export default redditItems.reducer;

export const selectTrigger = (store) => store.redditItems.trigger;

export const selectCriteria = (store) => store.redditItems.criteria;
