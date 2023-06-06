import axios from "axios";

export const fetchPostViewed = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.apiUrl}/api/postsviewed`)
      .then((response) => {
        if (
          response.data.impressions_history_posts_seen &&
          response.data.impressions_history_posts_seen.length > 0
        ) {
          const postsVieweds = response.data.impressions_history_posts_seen.map(
            (item) => {
              return item;
            }
          );
          dispatch({ type: "POSTSVIEWED", payload: postsVieweds });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
