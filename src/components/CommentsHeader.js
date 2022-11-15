import React, { useEffect } from "react";
import useAxiosFunction from "../hooks/useAxiosFunction";
import axios from "../apis/reddit";
import Comments from "./Comments";

const CommentsHeader = ({ url }) => {
  const [commentItems, loading, error, axiosFetch] = useAxiosFunction();

  const getItems = (commentSet) => {
    axiosFetch({
      axiosInstance: axios,
      method: "GET",
      url: `${commentSet}.json`,
    });
  };

  useEffect(
    () => {
      getItems(url);
    },
    // eslint-disable-next-line
    []
  );

  return (
    <article>
      <hr />
      {loading && <p>Loading..</p>}
      {!loading && error && <p className="errMsg">{error}</p>}
      {!loading && !error && commentItems.length && (
        <ul>
          {commentItems.map((comment, i) => (
            <li key={i}>
              <Comments items={comment.data?.children} />
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default CommentsHeader;

{
  /* <ul>
{commentItems.map((comment, i) => (
  <li key={i}>
    <Comments items={comment.data?.children} />
  </li>
))}
</ul> */
}
