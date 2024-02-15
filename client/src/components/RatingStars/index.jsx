// import React, { useContext, useState } from 'react'
// import './RatingStars.scss'
// import { userContext } from '../../context/UserContext';
// import axios from 'axios'

// function StarRating({ FilmName }) {
//   const { user } = useContext(userContext)

//   const handleRatingChange = async (event) => {
//     const res = await axios.put(`http://localhost:3000/moviecart/rating-update/${user._id}`, { rating: 2*parseInt(event.target.value), film: FilmName })
//   };



//   return (
//     <div class="rate">
//       <input type="radio" id="star5" name="rate" value="5" onChange={(e) => handleRatingChange(e)} />
//       <label for="star5" title="text" >5 stars</label>
//       <input type="radio" id="star4" name="rate" value="4" onChange={(e) => handleRatingChange(e)} />
//       <label for="star4" title="text" >4 stars</label>
//       <input type="radio" id="star3" name="rate" value="3" onChange={(e) => handleRatingChange(e)} />
//       <label for="star3" title="text" >3 stars</label>
//       <input type="radio" id="star2" name="rate" value="2" onChange={(e) => handleRatingChange(e)} />
//       <label for="star2" title="text" >2 stars</label>
//       <input type="radio" id="star1" name="rate" value="1" onChange={(e) => handleRatingChange(e)} />
//       <label for="star1" title="text" >1 star</label>
//     </div>
//   )
// }

// export default StarRating


import React, { useState, useEffect } from 'react';

const Star = ({ selected, onSelect, index }) => {
  const [hovered, setHovered] = useState(false);

  const starColor = selected ? 'blue' : hovered ? 'green' : 'red';

  return (
    <span
      style={{ color: starColor, cursor: 'pointer' }}
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      ★
    </span>
  );
};

const StarRating = ({filmİD}) => {
  const [selectedStar, setSelectedStar] = useState(
    localStorage.getItem('selectedStar') || null
  );
console.log("film:", filmİD);
  const handleStarSelect = (index) => {
    if (selectedStar === null) {
      setSelectedStar(index-1);
      localStorage.setItem('selectedStar', index);
    }
  };

  useEffect(() => {
    if (selectedStar !== null) {
      localStorage.setItem('selectedStar', selectedStar);
    }
  }, [selectedStar]);

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          index={index}
          selected={index.toString() <= selectedStar}
          onSelect={() => handleStarSelect(index.toString())}
        />
      ))}
    </div>
  );
};

export default StarRating;
