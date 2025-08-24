import React, { useState } from "react";
import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
  setRating: (rating: number) => void;
  size?: number;
  className?: string;
}

const Rating: React.FC<RatingProps> = ({
  rating,
  setRating,
  size = 24,
  className = "",
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (starIndex: number) => {
    setRating(starIndex);
  };

  const handleMouseEnter = (starIndex: number) => {
    setHoverRating(starIndex);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const getStarFill = (starIndex: number) => {
    const currentRating = hoverRating || rating;
    return starIndex <= currentRating;
  };

  return (
    <div className={`flex gap-1 ${className}`}>
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <button
          key={starIndex}
          type="button"
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded transition-all duration-150 hover:scale-110"
          onClick={() => handleClick(starIndex)}
          onMouseEnter={() => handleMouseEnter(starIndex)}
          onMouseLeave={handleMouseLeave}
          aria-label={`Rate ${starIndex} star${starIndex !== 1 ? "s" : ""}`}
        >
          <Star
            size={size}
            className={`transition-colors duration-150 ${
              getStarFill(starIndex)
                ? "fill-primary text-primary"
                : "text-accent hover:text-primary/20"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default Rating;
