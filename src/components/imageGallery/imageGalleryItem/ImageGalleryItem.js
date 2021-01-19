import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onImageClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={onImageClick}>
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" data-source={largeImageURL} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
