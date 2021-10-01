import React, { useState } from 'react'

const AddProduct = () => {

  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const [title, setTitle] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("data", data)
    console.log("title", title)
    console.log("description", description)
    console.log("price", price)
  }

  return (
    <>
      <div className="row p-3 m-0 d-flex justify-content-center">
        <div className="col-xs-12 col-sm-6 border my-5 p-5 shadow-lg rounded-lg ">
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
            <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
export default AddProduct