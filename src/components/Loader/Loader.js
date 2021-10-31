import React from 'react';
import Loader from 'react-loader-spinner';

function LoaderSpinner() {
  return (
    <Loader
      className="Loader App-logo"
      type="ThreeDots"
      color="#11BFFF"
      height={300}
      width={300}
      timeout={3000}
    />
  );
}

export default LoaderSpinner;
