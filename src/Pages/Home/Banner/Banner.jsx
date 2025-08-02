import banner from '../../../assets/home/banner.png'
import vector from '../../../assets/home/vector1.png'
import vector2 from '../../../assets/home/group7.png'
import vector3 from '../../../assets/home/group6.png'

const Banner = () => {
  return (
    <div id="banner" className='bg-primary-color w-full text-white flex flex-col md:flex-col lg:flex-row xl:flex-row justify-between items-center px-4 md:px-8 lg:px-12 xl:px-32 py-12 md:py-20 lg:py-32 xl:py-32'>
        <img src={vector} alt="" className='z-0 absolute top-0 left-0 w-36' />
        <img src={vector2} alt="" className='z-0 absolute top-3/7 left-1/2 w-40 transfrom -translate-x-3/7 transfrom -translate-y-1/2' />
        <img src={vector3} alt="" className='z-0 absolute bottom-30 left-3/7 w-14 transfrom -translate-y-3/7' />

      <div className='z-4 w-full lg:w-1/2 xl:w-1/2 m-auto h-full flex items-center pr-0 md:pr-3 lg:pr-6 pt-12 lg:pt-0 xl:pt-0'>
        <div className='w-3/5 md:w-3/4 m-auto lg:w-full xl:w-full text-center md:text-center lg:text-left xl:text-left'>
          <h1 className='text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-4'>Your Best Medical Help Center</h1>
          <p className='text-[14px] md:text-[16px] xl:text-[18px] mb-4'>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
          <button className='bg-secondary-color text-white px-6 py-3 rounded'>All service</button>
        </div>
      </div>
      <div className='z-10 w-full lg:w-1/2 xl:w-1/2 m-auto h-full flex items-center'>
        <div className='w-full flex justify-center items-center'>
          <img className='w-3/4 md:w-4/5 lg:w-full xl:w-full' src={banner} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner