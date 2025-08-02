// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsQuote } from "react-icons/bs";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import './testimonial.css'

// import required modules
import { FreeMode, Autoplay, Navigation } from 'swiper/modules';

const Testimonial = () => {
  return (
    <section className="pb-14 lg:pb-24 xl:pb-28">
      {/* Section heading */}

      <div className="text-center mb-6 lg:mb-8 m-auto w-7/8 lg:w-2/3">
        <h3 className="text-3xl lg:text-4xl font-semibold mb-3">What Our Patients Says</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>
      <div>
        <Swiper
            slidesPerView={1}
            responsive={{
              640:{
                slidesPerView: 1,
                spaceBetween:20
              },
              1024:{
                slidesPerView: 2,
                spaceBetween:20
              }
            }}
            navigation={true}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            freeMode={true}
            modules={[Autoplay, FreeMode, Navigation]}
            className="mySwiper"
          >
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
              <div className='w-full lg:w-1/2'>
                <div className='border border-gray-300 hover:border-[#F7A582] duration-500 rounded p-4 lg:p-8 h-full'>
                  <div>
                    <div className='mb-2 flex items-center justify-between'>
                      <div className='flex items-center gap-3 mb-3'>
                        <div className='w-16 border border-[#F7A582] h-16 rounded-full overflow-hidden'>
                          <img src="https://i.ibb.co/dMGgbdN/profile2.jpg" alt="" />
                        </div>
                        <div>
                          <h4 className='font-semibold text-[18px]'>Farhan Hossain</h4>
                          <p className='text-gray-600 text-[16px]'>Web developer</p>
                        </div>
                      </div>
                      <div>
                        <BsQuote className='secondary-color text-7xl'></BsQuote>
                      </div>
                    </div>
                    <div className='text-gray-600'>
                      <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2'>
                <div className='border border-gray-300 hover:border-[#F7A582] duration-500 rounded p-4 lg:p-8 h-full'>
                  <div>
                    <div className='mb-2 flex items-center justify-between'>
                      <div className='flex items-center gap-3 mb-3'>
                        <div className='w-16 border border-[#F7A582] h-16 rounded-full overflow-hidden'>
                          <img src="https://i.ibb.co/prbnRGK/profile3.jpg" alt="" />
                        </div>
                        <div>
                          <h4 className='font-semibold text-[18px]'>Awlad Hossain</h4>
                          <p className='text-gray-600 text-[16px]'>Product Designer</p>
                        </div>
                      </div>
                      <div>
                        <BsQuote className='secondary-color text-7xl'></BsQuote>
                      </div>
                    </div>
                    <div className='text-gray-600'>
                      <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
              <div className='w-full lg:w-1/2'>
                <div className='border border-gray-300 hover:border-[#F7A582] duration-500 rounded p-4 lg:p-8 h-full'>
                  <div>
                    <div className='mb-2 flex items-center justify-between'>
                      <div className='flex items-center gap-3 mb-3'>
                        <div className='w-16 border border-[#F7A582] h-16 rounded-full overflow-hidden'>
                          <img src="https://i.ibb.co/y5tTPHq/profile.jpg" alt="" />
                        </div>
                        <div>
                          <h4 className='font-semibold text-[18px]'>Ashik Hossain</h4>
                          <p className='text-gray-600 text-[16px]'>Web designer</p>
                        </div>
                      </div>
                      <div>
                        <BsQuote className='secondary-color text-7xl'></BsQuote>
                      </div>
                    </div>
                    <div className='text-gray-600'>
                      <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2'>
                <div className='border border-gray-300 hover:border-[#F7A582] duration-500 rounded p-4 lg:p-8 h-full'>
                  <div>
                    <div className='mb-2 flex items-center justify-between'>
                      <div className='flex items-center gap-3 mb-3'>
                        <div className='w-16 border border-[#F7A582] h-16 rounded-full overflow-hidden'>
                          <img src="https://i.ibb.co/prbnRGK/profile3.jpg" alt="" />
                        </div>
                        <div>
                          <h4 className='font-semibold text-[18px]'>Awlad Hossain</h4>
                          <p className='text-gray-600 text-[16px]'>Product Designer</p>
                        </div>
                      </div>
                      <div>
                        <BsQuote className='secondary-color text-7xl'></BsQuote>
                      </div>
                    </div>
                    <div className='text-gray-600'>
                      <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      
    </section>
  )
}

export default Testimonial