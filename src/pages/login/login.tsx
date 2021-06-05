import "./login.styles.css";

const Login = () => (
  <div className="box">
    <div className="card">
      <form>
        <div className="container">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="form-control"></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
            ></input>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            ></input>
            <label className="form-check-label" htmlFor="exampleCheck1">
              Save me
            </label>
          </div>
          <hr></hr>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Login;
