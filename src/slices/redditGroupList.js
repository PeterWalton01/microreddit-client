import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trigger: 0,
};

const redditGroups = createSlice({
  name: "redditGroups",
  initialState,
  reducers: {
    refreshGroups: (state) => {
      state.trigger += 1;
    },
  },
});

export const { toggle } = redditGroups.actions;

export default redditGroups.reducer;
