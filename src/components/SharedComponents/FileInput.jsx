import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import uploadPlus from '../../assets/images/uploadPlus.png';
import editIcon from '../../assets/images/editIcon.png';

import './fileInput.scss';

const FileInput = ({ name, onFileChange, imgSrc }) => {
  const inputOpenFileRef = useRef(null);

  const handleDivClick = () => {
    inputOpenFileRef.current?.click();
  };

  const renderInput = () => (
    <input
      ref={inputOpenFileRef}
      id={name}
      className="file-upload"
      type="file"
      onChange={onFileChange}
      accept="image/*"
      capture
    />
  );

  const renderUploadedImage = () => (
    <div className="imageWrapper">
      <img 
        className="editIcon" 
        src={editIcon} 
        onClick={handleDivClick}
        alt="Edit"
      />
      <img 
        className="uploadedImage" 
        src={imgSrc}
        alt="Uploaded preview" 
      />
      {renderInput()}
    </div>
  );

  const renderUploadIcon = () => (
    <div className="upload-icon">
      <div className="t-a-center">
        <img 
          className="mb-8" 
          src={uploadPlus} 
          alt="Upload"
        />
        <div className="sub-heading">Product Image</div>
      </div>
      {renderInput()}
    </div>
  );

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