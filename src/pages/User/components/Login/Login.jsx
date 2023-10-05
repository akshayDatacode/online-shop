import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import CustomLoader from "../../../../components/SharedComponents/CustomLoader"
import { loginUser } from "../../actions/apiServices"

const Login = () => {
  const dispatch = useDispatch()
  const { loginUserLoading, authError } = useSelector(({ user }) => user) || {}

  const history = useHistory()
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
    dispatch(loginUser(loginDetails)).then(({ res }) => {
      if (res?.status === 201 && res?.data?.token) {
        history.push('/')
        setLoginDetails({
          email: "",
          password: "",
        })
      }
    })
  }

  return (
    <>
      <div className="row mx-0">
        <div className="col-4 px-0 offset-4 border rounded shadow login-card">
          <h1 className="text-center border-bottom p-2">Login</h1>
          {
            loginUserLoading ?
              <CustomLoader />
              :
              <form className="p-5">
                <div class="form-group">
                  <label for="staticEmail" class="col-form-label">Email</label>
                  <input type="text" name="email" onChange={(e) => handleChange(e)} class="form-control form-control-lg" id="staticEmail" value={loginDetails.email} />
                </div>
                <div class="form-group mt-3">
                  <label for="inputPassword" class="col-form-label">Password</label>
                  <input type="password" name="password" onChange={(e) => handleChange(e)} value={loginDetails.password} class="form-control form-control-lg" id="inputPassword" placeholder="Password" />
                </div>
                <div className="text-center mt-4">
                  <div className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Login</div>
                </div>
                {authError && <p>{authError}</p>}
              </form>
          }
        </div>
      </div>
    </>
  )
}

export default Login