import React, { useState } from 'react'
import { toast } from 'react-toastify';

import FileInput from '../Utils/FileInput';
import { addProduct } from '../../apiServices'

import './addProduct.scss'

const AddProduct = () => {

  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const [title, setTitle] = useState()
  const [image, setImage] = useState()

  const onImageChoose = (event) => {
    const finalFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(finalFile);

    reader.addEventListener(
      'load',
      () => {
        setImage(reader.result)
      },
      false,
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      title,
      description,
      price,
      image,
    }
    addProduct(data).then((res) => {
      if (res) {
        toast.success('Product successfully created', {
          position: toast.POSITION.TOP_CENTER
        })
        setDescription('')
        setPrice('')
        setImage('')
        setTitle('')
      }
    })
  }

  return (
    <>
      <div className="row p-3 m-0 d-flex justify-content-center">
        <div className="col-xs-12 col-sm-6 border my-5 p-md-5 p-3 shadow-lg rounded-lg ">
          <h3 className="text-center">Add Product</h3>
          <form>
            <div className="form-group my-3">
              <label for="title">Title</label>
              <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" id="title" aria-describedby="title" placeholder="Title" />
            </div>
            <div className="form-group my-3">
              <label for="description">Description</label>
              <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} className="form-control" id="description" placeholder="Description" />
            </div>
            <div className="form-group my-3">
              <label for="price">Price</label>
              <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" className="form-control" id="price" placeholder="Price" />
            </div>
            {/* {image && <img className="form-group image my-3" src={image} />} */}
            <div className="form-group my-3">
              <label>Product Image</label>
              {/* <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => setImage(base64)}
              /> */}
              <FileInput imgSrc={image} onFileChange={onImageChoose} />
            </div>
            <div className="row m-0">
              <div className="col-12 text-center">
                <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary">Add Product</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default AddProduct