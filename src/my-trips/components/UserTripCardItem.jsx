import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UserTripCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    if (trip?.userSelection?.location) {
      GetPlacePhoto();
    }
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = { textQuery: trip?.userSelection?.location };
    try {
      const resp = await GetPlaceDetails(data);
      const photosArray = resp?.data?.places?.[0]?.photos;
      if (!photosArray || photosArray.length === 0) {
        console.warn("No photos available for this location.");
        return;
      }
      const photoname = photosArray[0]?.name;
      if (!photoname) return;

      const newPhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoname);
      setPhotoUrl(newPhotoUrl);
    } catch (error) {
      console.error("Error fetching photo:", error);
    }
  };

  return (
    <Link to={'/view-trip/'+trip?.id}>
      <div className="w-full h-56 flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-all ">
        <img  src={photoUrl || '/placeholder.webp'}  className="w-full h-40 object-cover rounded-xl" />
        <div className="p-2">
          <h2 className="font-bold text-lg">{trip?.userSelection?.location}</h2>
          <h2 className="text-sm text-gray-500">
            {trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default UserTripCardItem;
 