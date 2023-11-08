import { configureStore } from "@reduxjs/toolkit";
import tweetsReducer from './tweets/tweets-slice'

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    },
})