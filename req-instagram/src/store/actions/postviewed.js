import axios from "axios";

export const fetchPostViewed = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/postsviewed")
      .then((response) => {
        console.log(response)
        if (
          response.data &&
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
