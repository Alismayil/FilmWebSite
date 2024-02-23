import React, { useState, useContext } from 'react';
import { userContext } from '../../context/UserContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const Star = ({ selected, onSelect }) => {
  const [hovered, setHovered] = useState(false);
  const starColor = selected ? 'var(--bg-color-1)' : hovered ? 'var(--mode-color-2)' : 'gray';

  return (
    <span
      style={{ color: starColor, cursor: 'pointer' , fontSize:"30px"}}
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      ★
    </span>
  );
};

const StarRating = ({ Film }) => {
  const { user } = useContext(userContext);
  const [selectedStar, setSelectedStar] = useState(null);

  const handleStarSelect = async (index, rating, product) => {
    toast.success(`you rated movie ${2 * (parseInt(index) + 1)} point`);

    if (selectedStar === null) {
      setSelectedStar(index);
    }

    const res = await axios.put(`http://localhost:3000/rating/${user._id}`, {
      rating: rating,
      product: product
    });
  };

  if (Film.moviepoint.some((x) => x.rater === user._id)) {
    // Kullanıcı zaten filme puan vermişse
    return (
      <span style={{fontSize:'13px', color:'var(--mode-color-2)'}}>You have already rated this movie</span>
    );
  } else {
    // Kullanıcı filme puan vermemişse yıldızları göster
    return (
      <div>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            selected={index.toString() <= selectedStar}
            onSelect={() => handleStarSelect(index.toString(), (index + 1) * 2, Film.name)}
          />
        ))}
      </div>
    );
  }
};

export default StarRating;
