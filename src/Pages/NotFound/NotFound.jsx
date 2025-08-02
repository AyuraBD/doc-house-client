import { Link } from 'react-router-dom';
import notFoundImg from '../../assets/404.png';
const NotFound = () => {
  return (
    <div className='h-screen px-6 flex flex-col justify-center items-center'>
      <h3 className='text-2xl font-bold mb-2'>Sorry,</h3>
      <p className='text-gray-400 mb-6'>This page is not found.</p>
      <img className='mb-6 w-1/2' src={notFoundImg} alt="404 img" />
      <Link to='/' className='bg-[#F7A582] text-white rounded cursor-pointer py-3 mb-4 px-8 py-3 hover:bg-transparent hover:text-[#F7A582] border border-[#F7A582] duration-400'>Back to home</Link>
    </div>
  )
}

export default NotFound