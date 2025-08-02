import vector from '../../assets/home/vector1.png'
import vector2 from '../../assets/home/group7.png'
import { Link } from 'react-router-dom'

const SubPageBanner = ({breadcrumb, subheading, link}) => {
  return (
     <div className="bg-primary-color">
        <img src={vector} alt="" className='z-0 absolute rotate-0 lg:rotate-180 top-0 lg:top-50 left:0 lg:left-20 w-36' />
        <img src={vector2} alt="" className='z-0 absolute top-45 lg:top-30 right-0 lg:right-30 w-40' />
      <div className='py-32 px-4 md:px-8 lg:px-12 xl:px-32'>       
        <div className="text-center lg:text-left pt-8">
          <nav aria-label='breadcrumb'>
            <ol className="text-white flex justify-center lg:justify-start gap-2">
              <li className="mb-1"><Link to='/'>Home</Link></li>
              <span>/</span>
              <li><Link to={`${link}`}> {breadcrumb}</Link></li>
            </ol>
          </nav>
          <h3 className="text-white text-2xl font-bold">{subheading}</h3>
        </div>
      </div>
    </div>
  )
}

export default SubPageBanner