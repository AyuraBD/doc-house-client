import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SignupVector from '../../assets/signup/signup_vector.png';
import SignupImg from '../../assets/signup/signup1.png';
import vector from '../../assets/home/vector1.png'
import vector2 from '../../assets/home/group7.png'
import { AuthContext } from '../../Providers/AuthProviders';
import Loading from '../../Shared/Loading/Loading'
const Signin = () => {
  const {signIn, loading} = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const handleSignin = (e) =>{
    e.preventDefault();
    const form = e.target;
    const userName = form.username.value;
    const password = form.password.value;
    signIn(userName, password)
    .then(res => {
      console.log(res.user);
      navigate(from, {replace: true});
    })
    .catch(err => {
      setError(err.message);
    })
  }
  if(loading){
    return (
      <Loading></Loading>
    )
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
            <h1 className="text-2xl lg:text-4xl text-center font-bold mb-6">Sign in to Doc House</h1>
            <form className="" onSubmit={handleSignin}>
              <fieldset>
                <label className="label">Username or Email Address</label>
                <input type="text" name='username' className="input w-full mb-4 bg-gray-100 focus:outline-0" placeholder="Enter your username or email" />
                <label className="label flex justify-between">
                  <span>Password</span>
                  <a href="/forgotpassword text-[secondary-color]">Forgot password?</a>
                </label>
                <input type="password" name='password' className="input w-full mb-4 bg-gray-100 focus:outline-0" placeholder="Enter your password" />
                {error && <p className='text-red-500'>{error}</p>}
                <input type="submit" value="Sign in" className="bg-[#F7A582] text-white rounded cursor-pointer py-3 mb-4 w-full hover:bg-transparent hover:text-[#F7A582] border border-[#F7A582] duration-400"/>
                <p className='text-center'>New here? Please register at first. Go to <Link className='secondary-color' to="/signup">SIGN UP</Link></p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Signin