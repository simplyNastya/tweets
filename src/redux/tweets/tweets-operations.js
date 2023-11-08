import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTweets, updateUserFollowers } from '../../services/API/fetchTweets';

export const fetchTweets = createAsyncThunk(
    'tweets/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getAllTweets()
            return data
        } catch ({ message }) {
            return rejectWithValue(message)
        }
    }
)

export const updateFollowers = createAsyncThunk(
    'tweets/editTweet',
    async (value, { rejectWithValue }) => {
        try {
            const {data} = await updateUserFollowers(value)
            return data
        } catch ({ message }) {
            return rejectWithValue(message)
        }
    }
)
