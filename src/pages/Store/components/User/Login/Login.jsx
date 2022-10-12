import { useState } from "react"

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { value, name } = event.target
    setLoginDetails({ ...loginDetails, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("loginDetails", loginDetails)
    setLoginDetails({
      email: "",
      password: "",
    })
  }

  return (
    <>
      <div className="row mx-0">
        <div className="col-4 px-0 offset-4 border rounded shadow login-card">
          <h1 className="text-center border-bottom p-2">Login</h1>
          <form className="p-3">
            <div class="form-group">
              <label for="staticEmail" class="col-form-label">Email</label>
              <input type="text" name="email" onChange={(e) => handleChange(e)} class="form-control form-control-lg" id="staticEmail" value={loginDetails.email} />
            </div>
            <div class="form-group mt-3">
              <label for="inputPassword" class="col-form-label">Password</label>
              <input type="password" name="password" onChange={(e) => handleChange(e)} value={loginDetails.password} class="form-control form-control-lg" id="inputPassword" placeholder="Password" />
            </div>
            <div className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Login</div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login