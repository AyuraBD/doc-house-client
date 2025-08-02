import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SignupVector from '../../assets/signup/signup_vector.png';
import SignupImg from '../../assets/signup/signup1.png';
import vector from '../../assets/home/vector1.png'
import vector2 from '../../assets/home/group7.png'
import { AuthContext } from '../../Providers/AuthProviders';
import useAxiosSecure from '../../Hooks/useAxiosSecure/useAxiosSecure';
import { updateProfile } from 'firebase/auth';
import Auth from '../../firebase/firebase.config';
const Signup = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const {createUser} = useContext(AuthContext);
  const AxiosSecure = useAxiosSecure();

  const handleSignup = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const userName = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    setError('');

    createUser(email, password)
    .then(res => {
      console.log(res.user);
      updateProfile(Auth.currentUser, {
        displayName: name
      })
      .then(()=>{

      })
      .then(() => {

      })
      const userData = {name, userName, email, uid: res.user.uid, createdAt: new Date()};
      AxiosSecure.post('/users',  userData)
      .then(res => {
        if(res.data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your profile has been created",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset();
          setError('');
          navigate(from, {replace: true})
        }
      })
      .catch(err => console.log(err.message))
    })
    .catch(err => {
      setError(err.message);
    })
    
  }
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="relative text-center lg:min-h-screen w-full lg:w-1/2 bg-primary-color">
        <img src={vector} alt="" className='z-0 absolute inline lg:hidden top-0 left-0 w-25 lg:w-36' />
        <img src={vector2} alt="" className='z-0 absolute inline lg:hidden right-0 w-25 lg:w-36 top-20 right-40' />
        <img className='absolute top-0 right-0 w-1/2' src={SignupVector} alt="" />
        <div className='py-18 h-full lg:py-0 flex justify-center items-center'>
          <img className='w-1/2 lg:w-2/3' src={SignupImg} alt="" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:min-h-screen py-18 lg:py-0 flex justify-center items-center">
        <div className='w-full px-4 sm:px-12 md:px-28 lg:px-32'>
          <div className='border border-gray-200 rounded p-4 lg:p-12'>
            <h1 className="text-2xl lg:text-4xl text-center font-bold mb-6">Sign Up to Doc House</h1>
            <form className="" onSubmit={handleSignup}>
              <fieldset>
                <label className="label">Name</label>
                <input type="text" name='name' className="input w-full mb-4 bg-gray-100 focus:outline-0" placeholder="Enter your name" required />
                <label className="label">Username</label>
                <input type="text" name='username' className="input w-full mb-4 bg-gray-100 focus:outline-0" placeholder="Enter your username" required />
                <label className="label">Email</label>
                <input type="email" name='email' className="input w-full mb-4 bg-gray-100 focus:outline-0" placeholder="Enter your email" required />
                <label className="label">Password</label>
                <input type="password" name='password' className="input w-full mb-4 bg-gray-100 focus:outline-0" placeholder="Enter your password" required />
                {error && <p className='text-red-500'>{error}</p>}
                <input type="submit" value="Create Account" className="bg-[#F7A582] text-white rounded cursor-pointer py-3 mb-4 w-full hover:bg-transparent hover:text-[#F7A582] border border-[#F7A582] duration-400"/>
                <p className='text-center'>Already registered? Go to <Link className='secondary-color' to="/signin">SIGN IN</Link></p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup