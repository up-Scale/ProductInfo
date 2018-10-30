import React from 'react';
import ReviewsSpan from './styled-components/ReviewsSpan.jsx';
import ReactStars from 'react-stars'

const ReviewInfo = ({reviews}) => {
  return(
    <span style={{display:'inline'}}>
      <ReactStars
        count={5}
        value={reviews.average_score}
        size={24}
        color1={'#849493'}
        color2={'#14B6AD'}
        half={true}
        edit={false}
      />
      <ReviewsSpan>{`(${reviews.number_of_reviews} reviews)`}</ReviewsSpan>
    </span>
  )
}

export default ReviewInfo;

