import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <section className='pb-14 lg:pb-24 xl:pb-28'>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-4">
        
        <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 bg-[#07332F] p-5 rounded-xl">
          <div className="flex justify-center text-white gap-4">
            <CiClock2 className="w-1/4 text-5xl"></CiClock2>
            <div className="w-3/4">
              <h4 className="text-3xl mb-3">Opening Hours</h4>
              <p className="text-[20px] mb-1">Open 9.00 am to 5.00 pm</p>
              <p className="text-[20px]">Everyday</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 bg-[#F7A582] p-5 rounded-xl">
          <div className="flex justify-center text-white gap-4">
            <CiLocationOn className="w-1/4 text-5xl"></CiLocationOn>
            <div className="w-3/4">
              <h4 className="text-3xl mb-3">Our Locations</h4>
              <p className="text-[20px] mb-1">Dhanmondi 17, Dhaka-1200,</p>
              <p className="text-[20px]">Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 bg-[#07332F] p-5 rounded-xl">
          <div className="flex justify-center text-white gap-4">
            <FaPhoneVolume className="w-1/4 text-3xl"></FaPhoneVolume>
            <div className="w-3/4">
              <h4 className="text-3xl mb-3">Contact Us</h4>
              <p className="text-[20px] mb-1">+88 01750 00 00 00</p>
              <p className="text-[20px]">+88 01750 00 00 00</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default ContactInfo