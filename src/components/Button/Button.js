import React from 'react';
import PropTypes from 'prop-types';

function onBtnClick({ onClick }) {
  return (
    <button type="button" className="Button" onClick={onClick}>
      Загрузить еще
    </button>
  );
}
onBtnClick.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default onBtnClick;
