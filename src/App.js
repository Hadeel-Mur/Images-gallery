import React from "react";
import "./App.css"
function App() {
  return (
    <div className="card">
    <img src="http://source.unsplash.com/random" alt="" className="image"/>
    <div className="div-0">
      <div className="div-1">
        Photo by John Doe
      </div>
      <ul>
        <li>
          <strong>Views: </strong>
          4000
        </li>
        <li>
          <strong>Downloads: </strong>
          300
        </li>
        <li>
          <strong>Likes: </strong>
          400
        </li>
      </ul>
    </div>
    <div className="inline">
      <span className="hashtag">
        #tag1
      </span>
      <span className="hashtag">
        #tag2
      </span>
      <span className="hashtag">
        #tag3 
      </span>

    </div>
    </div>
  );
}

export default App;
