import React from "react";
import "./App.css";
import Header from "./components/Header";
import RedditList from "./components/RedditList";
import RedditItemList from "./components/RedditItemList";

function App() {
  return (
    <div>
      <Header />
      <div className="outer-flex">
        <div className="reddit-list">
          <RedditList />
        </div>
        <div className="reddit-items">
          <RedditItemList />
        </div>
      </div>
    </div>
  );
}

export default App;
