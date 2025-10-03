import React from 'react';
import PropTypes from 'prop-types';
import Loader from "react-loader-spinner";

const CustomLoader = ({
  color = "#797676",
  type = "ThreeDots",
  height = 50,
  width = 50,
  timeout = 1000
}) => (
  <div className="loader-container">
    <Loader
      type={type}
      color={color}
      height={height}
      width={width}
      timeout={timeout}
    />
  </div>
);

CustomLoader.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  timeout: PropTypes.number
};

export default CustomLoader;