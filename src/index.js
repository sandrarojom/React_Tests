//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

//ReactDOM
ReactDOM.render(
  <div>
    <h1 className="heading">My favorite wines are made of </h1>
    <img
      className="food-img"
      alt="riesling"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Riesling_grapes_leaves.jpg/800px-Riesling_grapes_leaves.jpg"
    />
    ,
    <img
      className="food-img"
      alt="grenache"
      src="https://www.thewinesociety.com/4a58e0/globalassets/discovery/grapes/grenache_1200x675.jpg"
    />
    <img
      className="food-img"
      alt="gamay"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_RR7hlkQ83ZaypRzUJv8vUTQNrVGh70-lg&usqp=CAU"
    />
  </div>,
  document.getElementById("root")
);
