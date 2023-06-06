import axios from "axios";

export const fetchUnfollow = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.apiUrl}/api/unfollow`)
      .then((response) => {
        if (
          response.data.relationships_unfollowed_users &&
          response.data.relationships_unfollowed_users.length > 0
        ) {
          const unfollowArr = [];

          response.data.relationships_unfollowed_users.map((item) => {
            const newArr = item.string_list_data;
            newArr.map((n) => {
              unfollowArr.push(n);
            });
          });

          dispatch({ type: "UNFOLLOW", payload: unfollowArr });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
