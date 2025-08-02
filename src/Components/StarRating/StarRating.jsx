import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const StarRating = ({rating}) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center" style={{color: '#fbbf24'}}>
      {[...Array(fullStars)].map((_,i) => <span key={`full-${i}`}><FaStar className="secondary-color"></FaStar></span>)}
      {halfStar && <span><FaStarHalfAlt className="secondary-color"></FaStarHalfAlt></span>}
      {[...Array(emptyStars)].map((_,i) => <span key={`empty-${i}`}><FaRegStar></FaRegStar></span>)}
    </div>
  )
}

export default StarRating