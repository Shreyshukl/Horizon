import { Button } from '@/components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { IoIosSend } from "react-icons/io";

function InfoSection({ trip }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    if (trip?.userSelection?.location) {
      GetPlacePhoto();
    }
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location
    };
    try {
      const resp = await GetPlaceDetails(data);
      const photosArray = resp?.data?.places?.[0]?.photos;
      if (!photosArray || photosArray.length === 0) {
        console.warn("No photos available for this location.");
        return;
      }
      const photoname = photosArray[0]?.name; // Use the first available photo
      if (!photoname) return;

      const newPhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoname);
      console.log("Photo URL:", newPhotoUrl);
      setPhotoUrl(newPhotoUrl);
    } catch (error) {
      console.error("Error fetching photo:", error);
    }
  };

  return (
    <div>
      {/* Image Section */}
      <img 
        src={photoUrl || '/placeholder.WEBP'} 
        className="h-[370px] w-full object-cover rounded-xl" 
        alt="Trip Destination" 
        onError={(e) => e.target.src = '/placeholder.WEBP'} // Fallback if image fails
      />

      {/* Trip Details Section */}
      <div className='flex justify-between items-center mt-5'>
        <div className='flex flex-col gap-2'>
          <h2 className='font-bold text-2xl'>{trip?.userSelection?.location || "Location not available"}</h2>
          <div className='flex gap-5 flex-wrap'>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>📅 {trip?.userSelection?.noOfDays} Day(s)</h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💰 {trip?.userSelection?.budget} Budget</h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>🥂 {trip?.userSelection?.traveler} Traveler(s)</h2>
          </div>
        </div>
        <Button><IoIosSend /></Button>
      </div>
    </div>
  );
}

export default InfoSection;
