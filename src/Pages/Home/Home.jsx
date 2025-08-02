import Banner from "./Banner/Banner"
import Contact from "./Contact/Contact"
import ContactInfo from "./ContactInfo/ContactInfo"
import OurDoctor from "./OurDoctor/OurDoctor"
import Services from "./Services/Services"
import Testimonial from "./Testimonial/Testimonial"

export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="px-4 md:px-8 lg:px-12 xl:px-32">
        <Services></Services>
        <ContactInfo></ContactInfo>
        <Testimonial></Testimonial>
        <OurDoctor></OurDoctor>
        <Contact></Contact>
      </div>
    </div>
  )
}
