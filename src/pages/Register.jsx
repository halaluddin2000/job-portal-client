import Lottie from "lottie-react";
import registerLottieData from "../assets/register.json";

function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-96 ml-14 lg:text-left">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl ml-8 py-5 font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    // <div className="hero bg-base-200 min-h-screen">
    //   <div className="hero-content flex-col lg:flex-row-reverse">
    //     <div className="text-center w-96 ml-14 lg:text-left">
    //       <Lottie animationData={registerLottieData}></Lottie>
    //     </div>
    //     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    //       <div className="card-body">
    //         <h1 className="text-5xl py-5 font-bold">Register now!</h1>
    //         <form onSubmit={handleRegister} className="fieldset">
    //           <label className="label">Email</label>
    //           <input
    //             type="email"
    //             name="email"
    //             className="input"
    //             placeholder="Email"
    //           />
    //           <label className="label">Password</label>
    //           <input
    //             type="password"
    //             name="password"
    //             className="input"
    //             placeholder="Password"
    //           />
    //           <div>
    //             <a className="link link-hover">Forgot password?</a>
    //           </div>
    //           <button onClick={henleClink} className="btn btn-neutral mt-4">
    //             Register
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Register;
