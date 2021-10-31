import React from 'react';
import PropTypes from 'prop-types';
import authContext from '../Context';

export default function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  previewURL,
}) {
  return (
    <li className="ImageGalleryItem" key={`id-${id}`}>
      <authContext.Consumer>
        {hadleImageClick => (
          <img
            src={webformatURL}
            data-src={previewURL}
            alt="searchedPicture"
            data-large={largeImageURL}
            className="ImageGalleryItem-image lazyload blur-up"
            onClick={hadleImageClick}
          />
        )}
      </authContext.Consumer>
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  previewURL: PropTypes.string.isRequired,
};
