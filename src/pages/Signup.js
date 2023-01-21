const Signup = () => {
  const handleSubmit = (e) => {
    //preventing browser from reloading
    e.preventDefault();

    //reading the form data
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log("FORM DATA", formJson);
  };

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
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
