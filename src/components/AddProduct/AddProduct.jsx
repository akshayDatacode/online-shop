import React, { useState } from 'react'

const AddProduct = () => {

  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const [title, setTitle] = useState()

  const handleSubmit = (data) => {
    console.log("data", data)
  }

  return (
    <>
      <div className="row m-0 d-flex justify-content-center">
        <div className="col-6 border my-5 p-5 shadow-lg rounded-lg ">
          <h3 className="text-center">Add Product</h3>
          <form>
            <div className="form-group my-3">
              <label for="exampleInputEmail1">Title</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group my-3">
              <label for="exampleInputPassword1">Description</label>
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group my-3">
              <label for="exampleInputPassword1">Price</label>
              <input onChange={(e) => setPrice(e.target.value)} type="number" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" onClick={() => handleSubmit()} className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
export default AddProduct