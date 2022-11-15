import { configureStore } from "@reduxjs/toolkit";
import redditGroupsReducer from "../slices/redditGroupList";
import redditItemsReducer from "../slices/redditItemList";

const store = configureStore({
  reducer: {
    redditGroups: redditGroupsReducer,
    redditItems: redditItemsReducer,
  },
});

export default store;
