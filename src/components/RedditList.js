import React, { useEffect } from "react";
import useAxiosFunction from "../hooks/useAxiosFunction";
import axios from "../apis/reddit";
import RedditButton from "./RedditButton";

const RedditList = () => {
  const [subReddits, loading, error, axiosFetch] = useAxiosFunction();

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: "GET",
      url: "/subreddits.json",
    });
  };

  useEffect(
    () => {
      getData();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <article className="button-container">
      <h3 className="subreddit-header">Subreddits</h3>
      {loading && <p>Loading..</p>}

      {!loading && error && <p className="errMsg">{error}</p>}

      {!loading && !error && subReddits.data?.children.length && (
        <ul>
          {subReddits.data.children.map((reddit, i) => (
            <li>
              <RedditButton record={reddit.data} />
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default RedditList;
