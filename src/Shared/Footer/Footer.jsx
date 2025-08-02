import { Link } from 'react-router-dom'
import footerLogo from '../../assets/footer_logo.png'

const Footer = () => {
  return (
    <footer className=' bg-slate-200 px-6 md:px-8 lg:px-12 xl:px-32'>
      {/* Footer top */}
      <div className='grid grid-cols-1 py-10 md:py-12 xl:py-20 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-4 border-b border-b-gray-300'>
        <div>
          <div className='flex flex-col items-center md:items-start xl:items-start'>
            <img className='mb-5 w-2/5 md:w-2/5 xl:w-5/7' src={footerLogo} alt="" />
            <p className='mb-4 text-center md:text-left xl:text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis error velit assumenda, maxime consequuntur sed ea fugit ipsa ducimus accusantium?</p>
            <button className='border w-1/3 md:w-2/5 xl:w-5/7 border-[#F7A582] text-[#F7A582] rounded p-3 cursor-pointer hover:bg-[#F7A582] hover:text-white duration-500 '>Appointment</button>
          </div>
        </div>
        <div>
          <div className='flex flex-col items-center md:items-start xl:items-start'>
            <h4 className='text-xl font-bold mb-4'>Quick Links</h4>
            <ul className='text-gray-500 text-center md:text-left lg:text-left flex flex-col gap-2'>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Service</Link>
              </li>
              <li>
                <Link to="#">Doctors</Link>
              </li>
              <li>
                <Link to="#">Departments</Link>
              </li>
              <li>
                <Link to="#">Online Payments</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">My Account</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className='flex flex-col items-center md:items-start xl:items-start'>
            <h4 className='text-xl font-bold mb-4'>Doc House Services</h4>
            <ul className='text-gray-500 text-center md:text-left lg:text-left flex flex-col gap-2'>
              <li>
                <Link to="#">Pediatric Clinic</Link>
              </li>
              <li>
                <Link to="#">Diagnosis Clinic</Link>
              </li>
              <li>
                <Link to="#">Cardiac Clinic</Link>
              </li>
              <li>
                <Link to="#">Laboratory Analysis</Link>
              </li>
              <li>
                <Link to="#">Gynecological Clinic</Link>
              </li>
              <li>
                <Link to="#">Personal Counseling</Link>
              </li>
              <li>
                <Link to="#">Dental Clinic</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className='flex flex-col items-center md:items-start xl:items-start'>
            <h4 className='text-xl font-bold mb-4'>Working Hours</h4>
            <ul className='text-gray-500 text-center md:text-left lg:text-left flex flex-col gap-2'>
              <li>
                <p>Monday - 10 am to 7 pm</p>
              </li>
              <li>
                <p>Tuesday - 10 am to 7 pm</p>
              </li>
              <li>
                <p>Wednesday - 10 am to 7 pm</p>
              </li>
              <li>
                <p>Thursday - 10 am to 7 pm</p>
              </li>
              <li>
                <p>Friday - 10 am to 7 pm</p>
              </li>
              <li>
                <p>Saturday - 10 am to 7 pm</p>
              </li>
              <li>
                <p>Sunday - 10 am to 7 pm</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div>
        <div className='px-2 py-4 text-center text-gray-500'>
          <p>Copyright 2025 - All right reserved by <Link to="/">Doc House Ltd.</Link></p>
        </div>
      </div>

    </footer>
  )
}

export default Footer