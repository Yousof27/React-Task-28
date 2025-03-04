import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllPosts = createAsyncThunk('posts/getAllPosts', async (url, thunkAPI) => {
    try {
        const response = await axios.get(url);
        console.log(response.ok);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export default getAllPosts;