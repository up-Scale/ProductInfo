import React from 'react';

const ReviewInfo = ({reviews}) => {
  return(
    <div>{reviews.average_score} {`(${reviews.number_of_reviews} reviews)`}</div>
  )
}

export default ReviewInfo;