import { CiLocationOn } from "react-icons/ci";
import { FiPhoneIncoming } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="pb-14 lg:pb-24 xl:pb-28">
      <div className='bg-primary-color p-6 lg:p-12 rounded-2xl'>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Contact */}
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <div className='text-white text-center lg:text-left'>
              <div className="text-center lg:text-left">
                <h3 className='text-2xl font-bold mb-4'>Contact with us</h3>
                <p className='mb-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
              </div>
              <a className="flex items-center gap-4 mb-4" href='tel:+8801234567890'>
                <FiPhoneIncoming className="text-2xl font-semibold"></FiPhoneIncoming>
                <span>+8801234567890</span>
              </a>
              <a className="flex items-center gap-4" href='https://maps.app.goo.gl/f8koDW4J4kkUti6d9' rel="noopener noreferrer" target="_blank">
                <CiLocationOn className="text-3xl font-semibold"></CiLocationOn>
                <span>Dhanmondi, Dhaka, Bangladesh</span>
              </a>
            </div>
          </div>
          {/* Appointment form */}
          <div className="w-full lg:w-1/2">
            <div className="flex mb-3 flex-col lg:flex-row gap-3 justify-between items-center">
              <div className="w-full lg:w-1/2">
                <input className="w-full bg-[#FFFFFF0D] rounded py-3 px-2 text-white focus:outline-1 focus:outline-gray-200 duration-500 transition-all" type="text" name="name" placeholder="Name"/>
              </div>
              <div className="w-full lg:w-1/2">
                <input className="w-full bg-[#FFFFFF0D] rounded py-3 px-2 text-white focus:outline-1 focus:outline-gray-200 duration-500 transition-all" type="email" name="email" placeholder="Email"/>
              </div>
            </div>

            <div className="flex mb-3 flex-col lg:flex-row gap-3 justify-between items-center">
              <div className="w-full lg:w-1/2">
                <input className="w-full bg-[#FFFFFF0D] rounded py-3 px-2 text-white focus:outline-1 focus:outline-gray-200 duration-500 transition-all" type="number" name="number" placeholder="Mobile Number"/>
              </div>
              <div className="w-full lg:w-1/2">
                <input className="w-full bg-[#FFFFFF0D] rounded py-3 px-2 text-white focus:outline-1 focus:outline-gray-200 duration-500 transition-all" type="name" name="doctorname" placeholder="Doctor Name"/>
              </div>
            </div>

            <div className="flex mb-3 flex-col lg:flex-row gap-3 justify-between items-center">
              <div className="w-full lg:w-1/2">
                <input className="w-full bg-[#FFFFFF0D] rounded py-3 px-2 text-white focus:outline-1 focus:outline-gray-200 duration-500 transition-all" type="date" name="date" placeholder="Date"/>
              </div>
              <div className="w-full lg:w-1/2">
                <select className="w-full bg-[#FFFFFF0D] rounded py-3 px-2 text-white focus:outline-1 focus:outline-gray-200 duration-500 transition-all">
                  <option value="">-- Select a time --</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:30 PM">03:30 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                </select>
              </div>
            </div>
            <div>
              <button className="w-full bg-[#F7A582] text-white py-3 rounded hover:text-[#F7A582] hover:bg-transparent duration-500 border border-[#F7A582] cursor-pointer">Book Now</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact