import { Link, useLoaderData } from "react-router-dom"
import StarRating from '../../Components/StarRating/StarRating'
import { CiLocationOn } from "react-icons/ci"
import { useState } from "react"
import SubPageBanner from "../../Shared/SubPageBanner/SubPageBanner"
const DoctorDetails = () => {
  const doctorProfile = useLoaderData();
  const {_id, name, designation, location, specialist, aboutMe, education, workExperience, services, awards, specialization, reviews, businessHours, fee, img, rating} = doctorProfile;

  console.log(doctorProfile);
  console.log(typeof(businessHours))
  const tabs = ['Overview', 'Location', 'Reviews', 'Business Hours'];
  const [activeTab, setActiveTab] = useState(0);
  const tabsCount = tabs.length;
  const current = tabs[tabsCount];
  console.log(current);
  return (
    <div>
      {/* Banner */}
      <SubPageBanner link={`/doctor/${_id}`} subheading="Doctor Profile" breadcrumb="Doctor Profile"></SubPageBanner>
      
      <div className="px-4 md:px-8 lg:px-12 xl:px-32 py-14 lg:py-24 xl:py-28 bg-gray-100">
        {/* Doctor details heading */}
        <div className="bg-white flex flex-col gap-4 md:flex-row lg:flex-row items-center p-4 mb-4 rounded">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <img className="rounded h-full" src={img} alt={name} />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3">
            <h3 className="text-2xl font-bold mb-1">{name}</h3>
            <p className="text-gray-500 mb-2">{designation}</p>
            <StarRating rating={rating}></StarRating>
            <div className="flex gap-2 items-center my-2 text-gray-500">
              <CiLocationOn className="text-xl"></CiLocationOn>
              <span>{location}</span>
            </div>
            <div className="flex gap-3 mb-2">
              <div className="w-10 h-10 bg-gray-300 rounded">

              </div>
              <div className="w-10 h-10 bg-gray-300 rounded">

              </div>
              <div className="w-10 h-10 bg-gray-300 rounded">

              </div>
              <div className="w-10 h-10 bg-gray-300 rounded">

              </div>
              <div className="w-10 h-10 bg-gray-300 rounded">

              </div>
            </div>
            <div className="flex gap-4">
              {specialist.map((specialist, idx) => <li className="border p-1 rounded list-none" key={idx}>{specialist}</li>)}
            </div>
          </div>
        </div>

        {/* Doctor details body */}
        <div className="bg-white rounded p-4">
          {/* Tabs */}
          <div className="flex justify-between items-center rounded border border-gray-300 mb-6">
            {tabs.map((tab, idx) => <button onClick={() => setActiveTab(idx)} key={idx} className={`py-3 w-full font-medium transition-all duration-300 ${
                    activeTab === idx
                      ? 'bg-secondary-color text-white'
                      : ' text-gray-700 hover:bg-blue-100'
                  }`}>{tab}</button>)}
          </div>
          {/* Tabs content */}
          <div className="py-2">
            {/* Overview */}
            <div className={activeTab !== 0 ? 'hidden' : 'inline'}>
              <div className="mb-4">
                <h3 className="text-xl display font-medium mb-2">About me</h3>
                <p>{aboutMe}</p>
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                  <div className="mb-2">
                    <h3 className="text-xl font-medium mb-3">Education</h3>
                    <ul className="list-disc px-5">
                      {education.map((edu, idx) => <li key={idx}>
                        <h5 className="font-medium">{edu}</h5>
                        <p className="text-gray-400">BDS</p>
                        <p className="text-gray-400">1998-2003</p>
                        </li>)}
                    </ul>
                  </div>

                  <div className="mb-2">
                    <h3 className="text-xl font-medium mb-3">Work & Experience</h3>
                    <ul className="list-disc px-5">
                      {workExperience.map((edu, idx) => <li key={idx}>
                        <h5 className="font-medium">{edu}</h5>
                        <p className="text-gray-400">2025 Present (5 Years)</p>
                        </li>)}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Services</h3>
                    <ul className="list-disc px-5">
                      {services.map((edu, idx) => <li key={idx}>
                        <h5 className="font-medium">{edu}</h5>
                        </li>)}
                    </ul>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="mb-3">
                    <h3 className="text-xl font-medium mb-3">Awards</h3>
                    <ul className="list-disc px-5">
                      {awards.map((edu, idx) => <li key={idx}>
                        <h5 className="font-medium">{edu}</h5>
                        </li>)}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Specializations</h3>
                    <ul className="list-disc px-5">
                       <li>
                        <h5 className="font-medium">{specialization}</h5>
                        </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* Locations */}
            <div  className={activeTab !== 1 ? 'hidden' : 'inline'}>
              <div className="mb-2">
                <h3 className="text-xl font-medium mb-3">Location</h3>
                <ul className="list-disc px-5">
                  <p>{location}</p>
                </ul>
              </div>
            </div>

            {/* Reviews */}
            <div  className={activeTab !== 2 ? 'hidden' : 'inline'}>
              <div className="mb-2">
                <h3 className="text-xl font-medium mb-3">Reviews</h3>
                <ul className="list-disc px-5">
                  {reviews.map((review, idx) => <li className="mb-2" key={idx}>
                    <h5 className="font-medium">{review.user}</h5>
                    <StarRating rating={review.rating}></StarRating>
                    <p>{review.comment}</p>
                    </li>)}
                </ul>
              </div>
            </div>

            {/* Business hours */}
            <div  className={activeTab !== 3 ? 'hidden' : 'inline'}>
              <div className="mb-2">
                <h3 className="text-xl font-medium mb-3">Business Hours</h3>
                <ul className="list-disc px-5">
                  <li className="mb-2">
                    <h5 className="font-medium">Monday: {businessHours.monday}</h5>
                  </li>
                  <li className="mb-2">
                    <h5 className="font-medium">Tuesday: {businessHours.tuesday}</h5>
                  </li>
                  <li className="mb-2">
                    <h5 className="font-medium">Wednesday: {businessHours.wednesday}</h5>
                  </li>
                  <li className="mb-2">
                    <h5 className="font-medium">Thursday: {businessHours.monday}</h5>
                  </li>
                  <li className="mb-2">
                    <h5 className="font-medium">Friday: {businessHours.friday}</h5>
                  </li>
                  <li className="mb-2">
                    <h5 className="font-medium">Saturday: {businessHours.saturday}</h5>
                  </li>
                  <li className="mb-2">
                    <h5 className="font-medium">Sunday: {businessHours.sunday}</h5>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>      

    </div>
  )
}

export default DoctorDetails