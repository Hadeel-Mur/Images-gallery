import React from 'react'
import "../App.css"


function ImagesCard( {image} ) {
    const tags = image.tags.split(',')
  return (
    <div className="card">
    <img src={image.webformatURL} alt="" className="image"/>
    <div className="div-0">
      <div className="div-1">
        Photo by {image.user}
      </div>
      <ul>
        <li>
          <strong>Views: </strong>
          {image.views}
        </li>
        <li>
          <strong>Downloads: </strong>
          {image.downloads}
        </li>
        <li>
          <strong>Likes: </strong>
          {image.likes}
        </li>
      </ul>
    </div>
    <div className="inline">
      {tags.map((tag, index) => (
        <span key={index} className="hashtag">
        #{tag}
      </span>
      ))}
      

    </div>
    </div>
  )
}

export default ImagesCard;