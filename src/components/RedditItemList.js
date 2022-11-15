import React, { useEffect } from "react";
import useAxiosFunction from "../hooks/useAxiosFunction";
import axios from "../apis/reddit";
import ItemPanel from "./ItemPanel";
import { useSelector } from "react-redux";
import { selectTrigger, selectCriteria } from "../slices/redditItemList";

const RedditItemList = () => {
  const choice = useSelector(selectTrigger);
  const criteria = useSelector(selectCriteria);

  const [subRedditsItems, loading, error, axiosFetch] = useAxiosFunction();

  const getItems = (choice, criteria) => {
    let url = "";

    // there is an inconsistency in the pI that causes
    // 404 errors. If search criteria is provided, then the
    // choice must not end in /
    if (criteria === "") {
      url = `${choice}.json`;
    } else {
      let clipped = "";
      if (choice.slice(choice.length - 1, choice.length) === "/") {
        clipped = choice.slice(0, choice.length - 1);
      } else {
        clipped = choice;
      }
      url = `${clipped}/search.json?q=${criteria}`;
    }
    // alert(url);
    axiosFetch({
      axiosInstance: axios,
      method: "GET",
      url: url,
    });
  };

  useEffect(
    () => {
      getItems(choice, criteria);
    },
    // eslint-disable-next-line
    [choice, criteria]
  );

  return (
    <article className="button-container" id="jump">
      {loading && <p>Loading..</p>}

      {!loading && error && <p className="errMsg">{error}</p>}

      {!loading && !error && subRedditsItems.data?.children.length && (
        <ul className="list-top">
          {subRedditsItems.data.children.map((reddit, i) => (
            <li key={i}>
              <ItemPanel record={reddit.data} />
              <hr />
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default RedditItemList;
