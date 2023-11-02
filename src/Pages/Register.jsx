
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";


const Register = () => {
   
    const {createUser,user}=useAuth()
    console.log(user);
    const navigate =useNavigate()
    const handelRegister =event=>{
        event.preventDefault()
        const form = event.target
        const firstName=form.firstName.value
        const LastName=form.LastName.value
        const email=form.email.value
        const password=form.password.value
        const user={firstName,LastName,email,password}
        console.log(user)
        createUser(email,password)
        .then(result => {
          const user =result.user
          console.log(user)
          toast.success('Registration Successful')
        navigate('/')
        })
        .catch(err=>{
        //   console.log(error);
        toast.error(err.message)
        })
    }

    return (
        <div className="hero min-h-screen rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
        <img src="https://i.ibb.co/CQMT47C/360-F-460710131-Yk-D6-Nsivdy-Ys-Hup-Nv-O3-Y8-MPEwx-TAh-ORh-removebg-preview.png" alt=""  className="text-black lg:w-3/6 mr-9"/>
          <div className="card lg:w-1/2 flex-shrink-0  max-w-sm shadow-2xl  bg-green-100">
            <form  onSubmit={handelRegister} className="card-body space-y-6">
              <h2 className="text-center font-bold ">Register Now</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">First Name</span>
                </label>
                <input type="text" 
                 placeholder="First Name"
                 name="firstName"
                  className="input input-bordered"
                 
                  required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Last Name</span>
                </label>
                <input type="text" 
                 placeholder="Last Name" 
                 name="LastName"
                 className="input input-bordered"
                 
                 required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input type="email" 
                 placeholder="email" 
                 name="email"
                 className="input input-bordered"
               
                 required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Confirm Password</span>
                </label>
                <input type="password"
                  name="password"
                  placeholder="password" 
                  className="input input-bordered"
                 
                  required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover font-semibold">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary ">Sign Up</button>
              
              </div>
            </form>
           <div className='py-6 space-y-5 text-bold'>

            <h2 className='text-center  mb-6'>Already have an account? <Link to='/login' className='text-red-400'>Sign in</Link></h2>
           </div>
          </div>
        </div>
        </div>
    );
};

export default Register;