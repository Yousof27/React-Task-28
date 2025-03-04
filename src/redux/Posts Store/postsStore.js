import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../Posts Reducer/postsReducer';

const postsStore = configureStore({
    reducer: {
        posts: postsSlice,
    }
});

export default postsStore;