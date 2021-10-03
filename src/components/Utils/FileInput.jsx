/* eslint-disable */
import React, { useRef } from 'react';

import uploadPlus from '../../assets/uploadPlus.png';
import editIcon from '../../assets/editIcon.png';
import './fileInput.scss';

const FileInput = ({
  name,
  onFileChange,
  imgSrc
}) => {

  const inputOpenFileRef = useRef(null);

  const onDivClick = () => {
    inputOpenFileRef.current?.click()
  }
  const inputElement =<input
    ref={inputOpenFileRef}
    id={name}
    className="file-upload"
    type="file"
    onChange={(evt) => onFileChange(evt)}
    accept="image/*"
    capture
  />

  return (
    <>
      <div className="file-input-container">
        {imgSrc ?
          <div className='imageWrapper'>
            <img className='editIcon' src={editIcon} onClick={onDivClick} />
            <img className='uploadedImage' src={imgSrc} />
            {inputElement}
          </div> :
          <div className="upload-icon">
            <div className="t-a-center">
              <img className="mb-8" src={uploadPlus} />
              <div className="sub-heading">Product Image</div>
            </div>
            {inputElement}
          </div>}
      </div>
    </>
  );
};

export default FileInput;
