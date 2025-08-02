import { useState } from 'react';
import servicePic from '../../../assets/home/dental-doctor.png'
import dental from '../../../assets/home/dental.png'
import gastro from '../../../assets/home/gastro.png'

const Services = () => {
  const tabs = [
  {
    id: 1,
    title: 'Cavity Protection',
    image: `${dental}`,
    heading: 'Electro Gastrology Therapy',
    description1: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error ',
    description2: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error ',
  },
  {
    id: 2,
    title: 'Cosmetic Dentisty',
    image: `${gastro}`,
    heading: 'Electro Gastrology Therapy',
    description1: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error ',
    description2: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error ',
  },
  {
    id: 3,
    title: 'Oral Surgery',
    image: `${dental}`,
    heading: 'Electro Gastrology Therapy',
    description1: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error ',
    description2: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error ',
  },
];
const [activeTab, setActiveTab] = useState(1);
const current = tabs.find(tab => tab.id === activeTab);

  return (
    <section className='py-14 lg:py-24 xl:py-28'>
      <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row justify-between items-center gap-4">
        <div className="w-full lg:w-1/2 xl:w-1/2">
          <div className="flex justify-center items-center">
            <img className='w-full h-1/2' src={servicePic} alt="" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/2 text-center lg:text-left xl:text-left">
          <div className="flex flex-col justify-center">
            <h3 className='text-3xl font-medium mb-4'>Our Service</h3>
            <p className='text-[14px] lg:text-[16px] xl:text-[16px] mb-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className="w-full max-w-4xl mx-auto p-4">
            {/* Tab Buttons */}
            <div className="flex justify-between items-center rounded border border-gray-300 mb-6">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 w-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-secondary-color text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white p-6 flex flex-col justify-center items-center">
              <div className='mb-8 w-full'>
                <img src={current.image} alt={current.heading} className="w-full rounded-md" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">{current.heading}</h2>
                <p className="text-gray-600 mb-4">{current.description1}</p>
                <p className="text-gray-600 mb-4">{current.description2}</p>

                <button className="border border-[#F7A582] text-[#F7A582] px-5 py-2 rounded-md hover:bg-[#F7A582] hover:text-white transition">
                  More Details
                </button>
              </div>
            </div>

          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services