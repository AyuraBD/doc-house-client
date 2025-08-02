import SubPageBanner from '../../Shared/SubPageBanner/SubPageBanner'
import Chair from '../../assets/chair.png';
import { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { IoClose } from "react-icons/io5";
import useAxiosSecure from '../../Hooks/useAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const Appointment = () => {
  const axiosSecure = useAxiosSecure();
  const [services, setServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectSlot, setSelectSlot] = useState('Cosmetic Dentistry');
  const [subServiceSelect, setsubServiceSelect] = useState(null);
  const [timeSelect, setTimeSelect] = useState(null);

  const {user} = useContext(AuthContext);

  useEffect(() =>{
    axiosSecure.get('/services')
    .then(res => setServices(res.data))
    .catch(err => console.log(err.message));
  },[])

  const handleAppointment = (e) =>{
    
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const time = form.time.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const appointData = {date, time, name, service: subServiceSelect, phone, email, usersEmail: user.email}
    
    axiosSecure.post('/appointments', appointData)
    .then(res => {
      if(res.data.insertedId){
        document.getElementById('my_modal_5').close();
        Swal.fire({
          title: "Submitted",
          text: "Your appointment has been submitted.",
          icon: "success"
        });
        form.reset();
      }
    })
    .catch(err => console.log(err.message));
  }

  return (
    <div>
      {/* Banner */}
      <SubPageBanner link={`/appointment`} subheading="Appointment" breadcrumb="Appointment"></SubPageBanner>
      <div className='relative py-10 lg:py-20 px-4 md:px-8 lg:px-12 xl:px-32 bg-gray-100'>
        <div className='bg-[url(../../assets/chair.png)] mb-18'>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full flex justify-center items-center lg:w-5/5 mb-8 lg:mb-0">
              <DatePicker className='z-10' selected={selectedDate} onChange={(date) => setSelectedDate(date)} inline/>
            </div>
            <div className="w-full lg:w-7/7 flex justify-center items-center">
              <img src={Chair}></img>
            </div>
          </div>
        </div>
        {/* Select a service */}
        <div className='mb-12'>
          <div className='text-center mb-8'>
            <p className='text-[#F7A582] mb-1'>Available Services on {selectedDate.toDateString()}</p>
            <h3 className='text-2xl font-bold'>Please select a service.</h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {services.map(service => <button key={service._id} onClick={() => setSelectSlot(`${service.serviceName}`)} className='shadow-base-600 shadow-xl hover:shadow-xl/30 rounded-xl p-3 flex justify-start items-center gap-4 cursor-pointer'>
              <img className='bg-[#FF41551A] p-2 rounded-xl' src={service.img} alt={service.serviceName} />
              <h5 className='text-[18px] font-medium'>{service.serviceName}</h5>
            </button>)}
          </div>
        </div>

        {/* Available slots */}
        <div>
          <div className='mb-6 text-center'>
            <h3 className='text-2xl font-bold'>Available slots for {selectSlot}</h3>
          </div>
            {services.map(service =>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' key={service._id}>
              {service.subServices.map((subService, idx) => selectSlot === service.serviceName &&
            
              <div key={idx} className='flex flex-col items-center py-6 shadow-base-600 shadow-xl rounded-xl'>
                <img className='bg-gray-300 rounded-full p-4 mb-8' src={service.img} alt="Teeth Orthodontics" />
                <h4 className='text-xl font-medium mb-1'>{subService.subServiceName}</h4>
                <p className='mb-6'>{subService.time}</p>
                <button onClick={() => {
                  setsubServiceSelect(subService.subServiceName);
                  document.getElementById('my_modal_5').showModal();
                  setTimeSelect(subService.time)
                }} 
                className="bg-[#F7A582] text-white rounded cursor-pointer py-3 mb-4 px-6 py-2 hover:bg-transparent hover:text-[#F7A582] border border-[#F7A582] duration-400">BOOK APPOINTMENT</button>

                {/*Booking Modal */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                      <div className='flex justify-between items-center mb-4'>
                        <h3 className="font-bold text-lg">{subServiceSelect}</h3>
                        <button onClick={()=>{
                          document.getElementById('my_modal_5').close();
                          setsubServiceSelect(null);
                          setTimeSelect(null);
                        }} className='btn border-0 bg-transparent hover:shadow-none'>
                          <span className='bg-[#07332F] p-2 rounded-full'><IoClose className='text-white text-xl'></IoClose></span>
                        </button>
                      </div>
                    <form onSubmit={handleAppointment}>
                      <fieldset>
                        <input defaultValue={selectedDate.toDateString()} type="text" name='date' className="input w-full mb-4 bg-gray-100 focus:outline-0" placeholder="Enter your name" readOnly/>
                        <input defaultValue={timeSelect} type="text" name='time' className="input w-full mb-4 bg-gray-100 focus:outline-0" placeholder="Enter your username" readOnly/>
                        <input defaultValue={user?.displayName} type="text" name='name' className="input w-full mb-4 bg-gray-100 focus:outline-0" placeholder="Full name" readOnly/>
                        <input type="number" name='phone' className="input w-full mb-4 bg-gray-100 focus:outline-0" placeholder="Phone number" />
                        <input defaultValue={user?.email} type="email" name='email' className="input w-full mb-4 bg-gray-100 focus:outline-0" placeholder="Email" readOnly/>
                        <input type="submit" value="SUBMIT" className="bg-[#07332F] text-white rounded cursor-pointer py-3 mb-4 w-full hover:bg-transparent hover:text-[#07332F] border border-[#07332F] duration-400"/>
                      </fieldset>
                    </form>
                  </div>
                </dialog>
              </div>)}
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default Appointment

