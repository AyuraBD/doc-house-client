import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProviders';
import Loading from '../Loading/Loading';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const {user, loading, logOut} = useContext(AuthContext);
  useEffect(() =>{
    const handleScroll = () =>{
      setScrolled(window.scrollY > 70 );
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  },[])
  const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/appointment'>Appointment</NavLink></li>
    <li><NavLink to='/signin'>Signin</NavLink></li>
  </>

  const handleSignOut = () =>{
    logOut()
    .then(() =>{

    })
    .catch(() =>{

    })
  }
  if(loading){
    return (
      <Loading></Loading>
    )
  }
  return (
    <div className={`z-10 navbar fixed ${scrolled ? 'shadow-2xl bg-primary-color xl:py-3' : 'bg-primary-color xl:py-3'} transition-all py-3 px-4 md:px-8 lg:px-12 xl:px-32 text-white`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-3 text-white hover:text-black duration-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-primary-color border rounded-box z-5 mt-3 w-52 p-2 shadow text-[14px] xl:text-[18px]">
            {navLinks}
          </ul>
        </div>
        <Link to='/' className="text-xl">
          <img className='w-36 md:w-38 lg:w-48 xl:w-48' src={Logo} alt="doc-house-logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[14px] xl:text-[18px]">
          {navLinks}
        </ul>
      </div>
      {user && <div className="navbar-end">
        <Link to='/userdashboard' className="mr-2">{user?.displayName}</Link>
        <button onClick={handleSignOut} className='bg-warning text-white px-3 py-1 rounded cursor-pointer'>Log out</button>
      </div>}
    </div>
  )
}

export default Navbar