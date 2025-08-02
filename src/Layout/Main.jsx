import { Outlet, useLocation} from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('signup') || location.pathname.includes('signin')
  return (
    <>
      {noHeaderFooter || <Navbar></Navbar>}
        <Outlet>
          
        </Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </>
  )
}

export default Main