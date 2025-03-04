import { createSlice } from '@reduxjs/toolkit';
import getAllPosts from '../../api/Posts/postsApi';

const initialPostsValue = { posts: [], loading: false, error: null };

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialPostsValue,

    extraReducers: (builder) => {
        builder
            .addCase(getAllPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
                console.log("1");
            })
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.loading = false;
                console.log("2");
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
                console.log("3");
            });
    }
});

export default postsSlice.reducer;