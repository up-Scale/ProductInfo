import React from 'react';
import ReviewLine from './styled-components/ReviewLine.jsx';
import ReviewsSpan from './styled-components/ReviewsSpan.jsx';
import ReactStars from 'react-stars'

const ReviewInfo = ({reviews}) => {
  return(
    <ReviewLine>
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
    </ReviewLine>
  )
}

export default ReviewInfo;

