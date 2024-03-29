import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { signupUser } from "../../actions"

const Singup = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { signupUserLoading } = useSelector(({ user }) => user) || {}
  const [singupDetails, setSingupDetails] = useState({
    email: '',
    name: '',
    address: '',
    phone: '',
    password: '',
    gender: '',
  })

  const handleChange = (event) => {
    const { value, name } = event.target
    setSingupDetails({ ...singupDetails, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(signupUser(singupDetails)).then(({ res }) => {
      if (res?.status === 201 && res?.data?.token) {
        history.push('/')
        setSingupDetails({
          email: '',
          name: '',
          address: '',
          phone: '',
          password: '',
          gender: '',
        })
      }
    })
  }

  return (
    <>
      <div className="row mx-0">
        <div className="col-4 px-0 offset-4 border rounded shadow singup-card">
          <h1 className="text-center border-bottom p-2">Singup</h1>
          <form className="p-5">
            <div className="row mx-0">
              <div className="form-group col-6">
                <label className="col-form-label">Name</label>
                <input type="text" name="name" onChange={(e) => handleChange(e)} className="form-control form-control-lg" value={singupDetails.name} />
              </div>
              <div className="form-group col-6">
                <label className="col-form-label">Email</label>
                <input type="text" name="email" onChange={(e) => handleChange(e)} className="form-control form-control-lg" id="staticEmail" value={singupDetails.email} />
              </div>
            </div>
            <div className="row mx-0">
              <div className="form-group col-6">
                <label className="col-form-label">Phone</label>
                <input type="text" name="phone" onChange={(e) => handleChange(e)} className="form-control form-control-lg" id="staticEmail" value={singupDetails.phone} />
              </div>
              <div className="form-group col-6">
                <label className="col-form-label">Address</label>
                <input type="text" name="address" onChange={(e) => handleChange(e)} className="form-control form-control-lg" value={singupDetails.address} />
              </div>
            </div>
            <div className="row mx-0">
              <div className="form-group mt-3 col-12">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input className="form-check-input" onChange={(e) => handleChange(e)} type="radio" name="gender" id="gridRadios1" value="male" checked={singupDetails.gender == 'male'} />
                      <label className="form-check-label" forhtml="gridRadios1">
                        Male
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" onChange={(e) => handleChange(e)} type="radio" name="gender" id="gridRadios2" value="female" checked={singupDetails.gender == 'female'} />
                      <label className="form-check-label" onChange={(e) => handleChange(e)} forhtml="gridRadios2">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group col-12">
                <label className="col-form-label">Password</label>
                <input type="password" name="password" onChange={(e) => handleChange(e)} value={singupDetails.password} className="form-control form-control-lg" id="inputPassword" placeholder="Password" />
              </div>
            </div>
            <div className="text-center mt-4">
              <div className="btn btn-primary" onClick={(e) => handleSubmit(e)}>{signupUserLoading ? "loading..." : "Singup"}</div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Singup