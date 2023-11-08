import { combineReducers } from "redux";

import tweetsSlice from "./tweets/tweets-slice";

const rootReducer = combineReducers({
    tweets: tweetsSlice,
})

export default rootReducer;