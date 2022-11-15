import React from "react";
import { useDispatch } from "react-redux";
import { refreshItems } from "../slices/redditItemList";

const RedditButton = ({ record }) => {
  const dispatch = useDispatch();

  return (
    <div className="button-inner">
      {/* eslint-disable-next-line */}
      <a className="big-screen" href="#">
        <button
          className="reddit-button"
          onClick={() => dispatch(refreshItems(record.url))}
        >
          <img className="subset-icon" alt="" src={record.icon_img} />
          <span className="subset-text">{record.display_name}</span>
        </button>
      </a>
      <a className="sm-screen" href="#jump">
        <button
          className="reddit-button"
          onClick={() => dispatch(refreshItems(record.url))}
        >
          <img className="subset-icon" alt="" src={record.icon_img} />
          <span className="subset-text">{record.display_name}</span>
        </button>
      </a>
    </div>
  );
};

export default RedditButton;
