import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FcReddit } from "../../node_modules/react-icons/fc";
import { HiOutlineSearch } from "react-icons/hi";
import { refreshCriteria } from "../slices/redditItemList";

const Header = () => {
  const dispatch = useDispatch();
  const [criteria, setCriteria] = useState("");

  const onCriteriaSubmit = (e) => {
    e.preventDefault();
    dispatch(refreshCriteria(criteria));
  };

  const onCriteriaChange = (e) => {
    setCriteria(e.target.value);
  };

  return (
    <header>
      <div>
        <FcReddit className="reddit-icon" />
      </div>
      <div>
        <p>
          Reddit<span>Micro</span>
        </p>
      </div>
      <div className="search-group">
        <form className="search" onSubmit={onCriteriaSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={criteria}
            onChange={onCriteriaChange}
            aria-label="Search posts"
          />
          <button type="submit" onClick={onCriteriaSubmit} aria-label="Search">
            <HiOutlineSearch />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
