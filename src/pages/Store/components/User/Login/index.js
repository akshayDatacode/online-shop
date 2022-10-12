const Login = () => {
  return (
    <>
      <div className="row mx-0 login-card">
        <div className="col-6 offset-3 border rounded">
          <form>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login