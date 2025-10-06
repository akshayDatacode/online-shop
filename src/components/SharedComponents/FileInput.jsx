import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import uploadPlus from '../../assets/images/uploadPlus.png';
import editIcon from '../../assets/images/editIcon.png';

import './fileInput.scss';

const FileInput = ({ name, onFileChange, imgSrc }) => {
  const inputOpenFileRef = useRef(null);

  const handleDivClick = useCallback(() => {
    inputOpenFileRef.current?.click();
  }, []);

  const renderInput = useCallback(() => (
    <input
      ref={inputOpenFileRef}
      id={name}
      className="file-upload"
      type="file"
      onChange={onFileChange}
      accept="image/*"
      aria-label="Upload product image"
      capture
    />
  ), [name, onFileChange]);

  const renderUploadedImage = useCallback(() => (
    <div className="imageWrapper" role="button" onClick={handleDivClick}>
      <img 
        className="editIcon" 
        src={editIcon} 
        alt="Edit image"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && handleDivClick()}
      />
      <img 
        className="uploadedImage" 
        src={imgSrc}
        alt="Product preview" 
      />
      {renderInput()}
    </div>
  ), [imgSrc, handleDivClick, renderInput]);

  const renderUploadIcon = useCallback(() => (
    <div 
      className="upload-icon"
      role="button"
      onClick={handleDivClick}
      onKeyPress={(e) => e.key === 'Enter' && handleDivClick()}
      tabIndex={0}
    >
      <div className="t-a-center">
        <img 
          className="mb-8" 
          src={uploadPlus} 
          alt="Upload icon"
        />
        <div className="sub-heading">Product Image</div>
      </div>
      {renderInput()}
    </div>
  ), [handleDivClick, renderInput]);

  return (
    <div className="file-input-container">
      {imgSrc ? renderUploadedImage() : renderUploadIcon()}
    </div>
  );
};

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  onFileChange: PropTypes.func.isRequired,
  imgSrc: PropTypes.string
};

export default FileInput;