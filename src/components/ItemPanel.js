import React, { useState } from "react";
import moment from "moment";
import { simInteger } from "../utils/simInteger";
import {
  TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownOutline,
  TiArrowDownThick,
  TiMessage,
} from "react-icons/ti";
import CommentsHeader from "./CommentsHeader";

const ItemPanel = ({ record }) => {
  const [showComments, setShowComments] = useState(false);
  const [topArrowFull, setTopArrowFull] = useState(false);
  const [btmArrowFull, setBtmArrowFull] = useState(false);

  const toggleTop = () => {
    setTopArrowFull(!topArrowFull);
    setBtmArrowFull(false);
  };

  const toggleBtm = () => {
    setBtmArrowFull(!btmArrowFull);
    setTopArrowFull(false);
  };

  // function isImage(url) {
  //   return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  // }
  return (
    <div className="panel-container">
      <div className="item-left">
        <div className="item-text">{record.title}</div>
        <div>
          {record.url && <img className="item-image" alt="" src={record.url} />}
          {!record.url && <br />}
        </div>
        <div className="item-middle-panel">
          <span className="lm-05">
            Author: <span className="dk-gr">{record.author}</span>
          </span>
          <span>{moment.unix(record.created_utc).fromNow()}</span>
          <span className="rm-05">
            <TiMessage
              className="comment-icon"
              onClick={() => {
                setShowComments(!showComments);
              }}
            />
            {simInteger(record.num_comments)}
          </span>
        </div>
        {showComments && <CommentsHeader url={record.permalink} />}
      </div>
      <div className="item-right">
        <div className="up-arrow" onClick={toggleTop}>
          {topArrowFull && <TiArrowUpThick />}
          {!topArrowFull && <TiArrowUpOutline />}
        </div>
        <div>{simInteger(record.ups)}</div>
        <div className="down-arrow" onClick={toggleBtm}>
          {btmArrowFull && <TiArrowDownThick />}
          {!btmArrowFull && <TiArrowDownOutline />}
        </div>
      </div>
    </div>
  );
};
export default ItemPanel;
