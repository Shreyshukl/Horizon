import React from 'react';
import { Link } from 'react-router-dom';
import HotelCardItem from './HotelCardItem';

function Hotels({ trip }) {
  // console.log("Hotel Options:", trip?.tripData?.[0]?.travelPlan?.hotelOptions);

  const hotels = trip?.tripData?.[0]?.travelPlan?.hotelOptions;

  return (
    <div>
      <h2 className="font-bold text-xl mt-5 mb-5">Hotel Recommendation</h2>
      <div className='grid grid-cols-2 md:grid-cols-3  gap-5'>
        {hotels?.map((hotel, index) => (
            <HotelCardItem key={index} hotel={hotel}/>
        ))}
      </div>
      
    </div>
  );
}

export default Hotels;
