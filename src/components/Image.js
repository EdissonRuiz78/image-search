import React from "react";

const Image = (props) => {

  const { largeImageURL, previewURL, likes, tags, views, downloads } = props.image
  const name = tags.split(",");
 
  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="card mb-3 p-0">
        <h3 className="card-header">{name[1]}</h3>
        <div className="card-body p-0">
          <img src={previewURL} alt={tags} height="200px" width="100%"/>
          <p className="card-text">
            <p className="text-muted ml-3">{downloads} Downloads</p> 
            <p className="text-muted ml-3">{likes} Likes</p>
            <p className="text-muted ml-3">{views} Views</p>
            <a className="btn btn-primary btn-block" href={largeImageURL} target="_blank">Download</a>
          </p>
        </div>  
        </div>    
    </div>
  )
}

export default Image;