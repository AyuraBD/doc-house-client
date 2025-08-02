import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure/useAxiosSecure'
import Navbar from '../Shared/Navbar/Navbar'
import { AuthContext } from '../Providers/AuthProviders';

const UserDashboard = () => {
  const AxiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext);
  const [myAppointments, setMyAppointments] = useState([]);
  useEffect(()=>{
    AxiosSecure.get(`/myappointments?email=${user.email}`, {withCredentials: true})
    .then(res => setMyAppointments(res.data))
    .then(err => console.log(err.message))
  },[])
  console.log(myAppointments);
  return (
    <>
      <Navbar></Navbar>
      <div className='flex flex-col md:flex-row lg:flex-row'>
        <div className='bg-white px-4 w-full hidden md:inline lg:inline md:w-3/12 lg:w-2/12 pt-22 pb-3 h-content md:h-screen lg:h-screen'>
          <h3 className='text-[18px] font-medium'>My Appointments</h3>
        </div>
        <div className='bg-base-300 w-full md:w-9/12 lg:w-10/12 px-4 py-4 pt-22 h-screen'>
          <div>
            <h3 className='text-2xl font-medium mb-3'>My Appointments</h3>

          </div>

          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>SL</th>
                  <th>NAME</th>
                  <th>SERVICE</th>
                  <th>TIME</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {myAppointments.map((myAppointment, idx) => <tr key={myAppointment._id}>
                  <th>{idx + 1}</th>
                  <td>{myAppointment.name}</td>
                  <td>{myAppointment.service}</td>
                  <td>{myAppointment.time}</td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDashboard