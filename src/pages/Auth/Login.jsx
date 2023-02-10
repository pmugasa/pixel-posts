const Login = ({ handleLogin, email, setEmail, password, setPassword }) => {
  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="flex items-center justify-center h-screen  sm:flex sm:items-center sm:justify-center sm:h-screen ">
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  placeholder="example@mail.com"
                  className="input input-bordered input-accent w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                  placeholder="••••••••••••••••"
                  className="input input-bordered input-accent w-full max-w-xs"
                />
              </div>
              <div className="card-actions justify-end mt-4">
                <button type="submit" className="btn  btn-primary w-full">
                  Login
                </button>
              </div>
              <div className="flex space-x-4 mt-4 mr-auto">
                <p>Not registered?</p>
                <Link href="/signup" className="link link-primary">
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Login;
