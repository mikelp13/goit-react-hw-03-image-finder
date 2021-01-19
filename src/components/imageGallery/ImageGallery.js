import React from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ images, onImageClick}) => {
  return (
    <ul className="ImageGallery" >
      {images.map((image) => (
        <ImageGalleryItem key={image.id} {...image} onImageClick={onImageClick}/>
      ))}
    </ul>
  );
};

ImageGallery.propTypes={
  images:PropTypes.arrayOf(PropTypes.object).isRequired,
  onImageClick:PropTypes.func.isRequired,
}
export default ImageGallery;
