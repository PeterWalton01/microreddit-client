import React from "react";
import moment from "moment";

const Comments = ({ items }) => {
  return (
    <article>
      <ul className="comment-spacing">
        {items.map(
          (item, i) =>
            i > 0 && (
              <>
                <li key={i} className="comment-spacing">
                  <div class="comment-text">{item.data.body}</div>
                  <br />
                  <div className="item-middle-panel">
                    <span className="lm-05">
                      Author: <span className="dk-gr">{item.data.author}</span>
                    </span>
                    <span className="rm-05">
                      {moment.unix(item.data.created_utc).fromNow()}
                    </span>
                  </div>
                  <hr />
                </li>
              </>
            )
        )}
      </ul>
    </article>
  );
};

export default Comments;
