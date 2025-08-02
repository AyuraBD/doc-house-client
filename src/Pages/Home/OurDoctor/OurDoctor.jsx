import { useEffect, useState } from "react";
import { CiCalendarDate, CiDollar, CiLocationOn } from "react-icons/ci";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import StarRating from "../../../Components/StarRating/StarRating";
import { Link } from "react-router-dom";
const OurDoctor = () => {
  const axiosSecure = useAxiosSecure();
  const [doctors, setDoctors] = useState([]);

  useEffect(()=>{
    axiosSecure.get('/doctors')
    .then( res => {
      setDoctors(res.data)
    })
    .catch(err => {
      console.log(err.message);
    })
  },[])
  return (
    <section className="pb-14 lg:pb-24 xl:pb-28">
      {/* Section heading */}

      <div className="text-center mb-6 lg:mb-8 m-auto w-7/8 lg:w-2/3">
        <h3 className="text-3xl lg:text-4xl font-semibold mb-3">Our expert doctors</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {doctors.map(doctor => <div key={doctor._id} className='border border-gray-300 p-4 rounded'>
          <div>
            <img className='w-full mb-3' src={doctor.img} alt={doctor.name} />
          </div>
          <div className="py-2">
            <h4 className="text-xl font-semibold">{doctor.name}</h4>
            <p className="text-gray-500">{doctor.designation}</p>
            <div className="flex items-center mb-3 border-b pb-4 border-b-gray-200">
              <StarRating rating={doctor.rating}></StarRating>
            </div>
            <div className="flex gap-4 items-center text-gray-500">
              <CiLocationOn className="text-xl"></CiLocationOn>
              <span>{doctor.location}</span>
            </div>
            <div className="flex gap-4 items-center text-gray-500">
              <CiCalendarDate className="text-xl"></CiCalendarDate>
              <span>Available On Mon, 22 December</span>
            </div>
            <div className="flex gap-4 items-center text-gray-500 mb-5">
              <CiDollar className="text-xl"></CiDollar>
              <span>${doctor.fee}</span>
            </div>
            <Link to={`/doctor/${doctor._id}`} className="border cursor-pointer hover:bg-[#F7A582] duration-500 hover:text-white border-[#F7A582] py-2 px-4 text-[#F7A582] rounded">View Profile</Link>
          </div>
        </div>)}
      </div>
    </section>
  )
}

export default OurDoctor