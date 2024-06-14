// src/components/RatingComponent.js
import React from 'react';
import H4 from '../ui/Typography/h4';

const RatingComponent = ({ ratings }) => {
    const ratingCounts = [1, 2, 3, 4, 5].map(rating => ({
        rating,
        count: ratings?.filter(review => review.rating === rating).length
      })).reverse(); // Reverse to have 5 stars at the top
    
      const totalReviews = ratings?.length;
      const averageRating = (ratings?.reduce((acc, review) => acc + review.rating, 0) / totalReviews).toFixed(1);



  return (
    <div className="flex flex-col w-72 font-sans my-2">
           <H4>
           리뷰
        </H4>
      <div className="flex flex-col items-start mb-4">
        <div className="flex mr-3">
          {[...Array(5)].map((star, index) => (
            <span key={index} className={index < Math.floor(averageRating) ? 'text-yellow-400 text-2xl' : 'text-gray-300 text-2xl'}>★</span>
          ))}
        </div>
        <div className='flex flex-row items-center'>
        <span className="text-xl font-bold mr-2">{averageRating}</span>
        <span className="text-sm text-gray-600">({totalReviews})</span>
        </div>
      
      </div>
      <div className="flex flex-col space-y-1 ">
        {ratingCounts.map((rating, index) => (
          <div key={index} className="flex items-center">
            <span className="w-8 text-sm">{rating.rating}점</span>
            <div className="flex-grow h-2 mx-2 bg-gray-200 rounded-full relative">
              <div className="h-2 bg-black rounded-full" style={{ width: `${(rating.count / totalReviews) * 100}%` }}></div>
            </div>
            <span className="w-6 text-sm text-right">{rating.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingComponent;
