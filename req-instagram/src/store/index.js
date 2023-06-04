import { configureStore } from '@reduxjs/toolkit';
import recentReducer from './reducers/recent';
import gtsReducer from './reducers/gtfollowers';
import unfollowReducer from './reducers/unfollowed';
import postsViewedReducer from './reducers/postsviewed';

const store = configureStore({
    reducer: {
        recent: recentReducer,
        gts: gtsReducer,
        unfollow: unfollowReducer,
        postsviewed: postsViewedReducer,
    }
});

export default store;