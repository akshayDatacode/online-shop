const Login = () => {
  return (
    <>
      <div className="row mx-0">
        <div className="col-4 px-0 offset-4 border rounded shadow login-card">
          <h1 className="text-center border-bottom p-2">Login</h1>
          <form className="p-3">
            <div class="form-group">
              <label for="staticEmail" class="col-form-label">Email</label>
              <input type="text" class="form-control form-control-lg" id="staticEmail" value="email@example.com" />
            </div>
            <div class="form-group mt-3">
              <label for="inputPassword" class="col-form-label">Password</label>
              <input type="password" class="form-control form-control-lg" id="inputPassword" placeholder="Password" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login