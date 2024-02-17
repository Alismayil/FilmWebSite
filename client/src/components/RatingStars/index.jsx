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


import React, { useState, useEffect, useContext } from 'react';
import { userContext } from '../../context/UserContext';

const Star = ({ selected, onSelect }) => {
  const [hovered, setHovered] = useState(false);
  const {user}=useContext(userContext)

 async function handleReview(id, newreview , productname) {
  const res=await axios.put(`http://localhost:3000/users/updatereview/${id}`,{
    NewReview:newreview,
    ProductName:productname
  })
  console.log("saalm:",res.data);
 }

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

const StarRating = ({ movieId , Film }) => {
  const [selectedStar, setSelectedStar] = useState(
    localStorage.getItem(`selectedStar-${movieId}`) || null
  );

  const handleStarSelect = (index) => {
    if (selectedStar === null) {
      setSelectedStar(index);
      localStorage.setItem(`selectedStar-${movieId}`, index);
    }
  };

  useEffect(() => {
    if (selectedStar !== null) {
      localStorage.setItem(`selectedStar-${movieId}`, selectedStar);
    }
  }, [selectedStar, movieId]);

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          selected={index.toString() <= selectedStar}
          onSelect={() => handleStarSelect(index.toString())}
        //   onClick={()=>handleReview(user._id, ,Film.Name)}
        //   onChange={(e) => handleRatingChange(e)}
        />
      ))}
    </div>
  );
};

export default StarRating;


