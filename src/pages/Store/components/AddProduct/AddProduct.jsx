import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Multiselect } from "react-widgets";

import FileInput from '../../../../components/SharedComponents/FileInput';
import { category } from '../../../../utility/options';
import { addProduct } from '../../actions'

const AddProduct = () => {

  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const [title, setTitle] = useState()
  const [image, setImage] = useState(process.env.REACT_APP_DEFAULT_IMAGE)
  const [categories, setCategories] = useState()
  const [formErrors, setFormErrors] = useState({
    title: false,
    price: false,
    description: false,
  })

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

  const handleFormValidation = (e) => {
    if (e.target.value.trim() === '') {
      setFormErrors({ ...formErrors, [e.target.name]: true })
    } else {
      setFormErrors({ ...formErrors, [e.target.name]: false })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      title,
      description,
      price,
      image,
      categories,
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
  const onChangeCagetory = (value) => {
    setCategories(value)
  }
  console.log("Form Error", formErrors)
  return (
    <>
      <div className="row mt-5 p-3 mx-0 d-flex justify-content-center">
        <div className="col-xs-12 col-sm-6 border my-5 p-md-5 p-3 shadow-lg rounded-lg ">
          <h3 className="text-center">Add Product</h3>
          <form>
            <div className="form-group my-3">
              <label for="title">Title</label>
              <input type="text" onBlur={(e) => handleFormValidation(e)} onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" name="title" id="title" aria-describedby="title" placeholder="Title" />
              {formErrors.title && <small className='text-danger'>Title Field Required</small>}
            </div>
            <div className="form-group my-3">
              <label for="description">Description</label>
              <input type="text" onBlur={(e) => handleFormValidation(e)} onChange={(e) => setDescription(e.target.value)} value={description} className="form-control" name="description" id="description" placeholder="Description" />
              {formErrors.description && <small className='text-danger'>Description Field Required</small>}
            </div>
            <div className="form-group my-3">
              <label for="price">Price</label>
              <input onBlur={(e) => handleFormValidation(e)} onChange={(e) => setPrice(e.target.value)} name="price" value={price} type="number" className="form-control" id="price" placeholder="Price" />
              {formErrors.price && <small className='text-danger'>Price Field Required</small>}
            </div>
            {/* {image && <img className="form-group image my-3" src={image} />} */}
            <Multiselect
              data={category}
              dataKey={"value"}
              textField={'category'}
              placeholder={'Select Product Category'}
              value={categories}
              name="categories"
              onBlur={(e) => handleFormValidation(e)}
              onChange={(value) => onChangeCagetory(value)}
            />
            <div className="form-group my-3">
              <label>Product Image</label>
              {/* <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => setImage(base64)}
              /> */}
              <FileInput imgSrc={image} onFileChange={onImageChoose} />
            </div>
            <div className="row mx-0">
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