const Signup = ({ handleSignUp, setEmail, setPassword, password, email }) => {
  //TODO: fix the scrolling effect

  return (
    <>
      <form onSubmit={handleSignUp}>
        <div className="flex items-center justify-center h-screen  sm:flex sm:items-center sm:justify-center sm:h-screen ">
          <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="card-title">Sign Up</h2>
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
                <button className="btn  btn-primary w-full">Signup</button>
              </div>
              <div className="flex space-x-4 mt-4 mr-auto">
                <p>Already have an account?</p>
                <a href="/login" className="link link-primary">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Signup;
