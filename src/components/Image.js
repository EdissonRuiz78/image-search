import React from "react";
import PropTypes from "prop-types";

const Image = ({ image }) => {
  const { largeImageURL, previewURL, likes, tags, views, downloads } = image;
  const name = tags.split(",");

  return (
    <div className="col-12 col-sm-6 col-md-3 mb-4">
      <div className="card mb-3 p-0">
        <h3 className="card-header">{name[1]}</h3>
        <div className="card-body p-0">
          <img src={previewURL} alt={tags} height="200px" width="100%" />
          <div className="card-text">
            <p className="text-muted ml-3">{downloads} Downloads</p>
            <p className="text-muted ml-3">{likes} Likes</p>
            <p className="text-muted ml-3">{views} Views</p>
            <a
              className="btn btn-primary btn-block"
              href={largeImageURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.object.isRequired,
};

export default Image;
