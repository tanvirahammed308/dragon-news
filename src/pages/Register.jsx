import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
    const {createUser}=useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault();
        console.log('register is ok')
        const form=new FormData(e.currentTarget)
        const email=form.get('email')
        const name=form.get('name')
        const password=form.get('password')
        const photoUrl=form.get('photoUrl')
        console.log(email,name,password,photoUrl)
        createUser( email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
    }
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name='name'
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name='photoUrl'
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
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
                
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                >
                  <label className="label">
                  <span className="label-text">Password</span>
                </label>
                </input>
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p>already have an account ? <Link to='/login'>login</Link></p>
          </div>
        </div>
      </div>
  )
}

export default Register