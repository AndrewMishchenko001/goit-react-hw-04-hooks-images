import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

export default function ImageGallery({ gallery }) {
  return (
    <ul className="ImageGallery">
      {gallery.map(image => ImageGalleryItem(image))}
    </ul>
  );
}
ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
};
