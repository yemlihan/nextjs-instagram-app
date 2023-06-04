const initialState = {
  postsViewed: [],
};

const postsViewedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POSTSVIEWED":
      const postsViewedPayload = action.payload;
      const postsViewedDatas = postsViewedPayload.map((posts) => {
        return posts;
      });
      if (postsViewedDatas.length === 0) {
        console.log("reducers recents error");
      }
      return { ...state, postsViewed: postsViewedDatas };
    default:
      return state;
  }
};

export default postsViewedReducer;
