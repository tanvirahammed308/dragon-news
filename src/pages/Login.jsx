import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const {signIn}=useContext(AuthContext);
  const location =useLocation()
  const navigate=useNavigate()
    const handleLogin=e=>{
        e.preventDefault()
        console.log('login is ok')
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)  
        signIn( email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    
    navigate(location?.state ? location.state : '/')
    
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
  });


        // // alter native
        // const form=new FormData(e.currentTarget);
        // console.log(form)
    }
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
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
            <p>dont have an account ? <Link to='/register'>sing up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
