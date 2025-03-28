import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItem({place}) {
  const [photoUrl,setPhotoUrl]=useState(null);
    
      useEffect(()=>{
        place&&GetPlacePhoto();
      },[place]);
    
      const GetPlacePhoto=async()=>{
        const data={
          textQuery:place.placeName
        }
        try {
          const resp = await GetPlaceDetails(data);
          const photoname = resp.data.places[0].photos[0].name;
          const newPhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoname);
          setPhotoUrl(newPhotoUrl); 
        } catch (error) {
          console.error("Error fetching photo:", error);
        }
    };

  // const [photoUrl, setPhotoUrl] = useState(null);
  
  //   useEffect(() => {
  //     if (place?.userSelection?.location) {
  //       GetPlacePhoto();
  //     }
  //   }, [place]);
  
  //   const GetPlacePhoto = async () => {
  //     const data = {
  //       textQuery: place.placeName
  //     };
  //     try {
  //       const resp = await GetPlaceDetails(data);
  //       const photosArray = resp?.data?.places?.[0]?.photos;
  //       if (!photosArray || photosArray.length === 0) {
  //         console.warn("No photos available for this location.");
  //         return;
  //       }
  //       const photoname = photosArray[0]?.name; // Use the first available photo
  //       if (!photoname) return;
  
  //       const newPhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoname);
  //       console.log("Photo URL:", newPhotoUrl);
  //       setPhotoUrl(newPhotoUrl);
  //     } catch (error) {
  //       console.error("Error fetching photo:", error);
  //     }
  //   };
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place.placeName} target='_blank'>
      <div className='border border-gray-300 rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
        <img src={photoUrl || '/placeholder.WEBP'} className='w-[130px] h-[130px] rounded-xl object-cover'/>
        <div>
          <h2 className='font-bold text-lg'>{place.placeName}</h2>
          <p className='text-sm text-gray-400'>{place.placeDetails}</p>
          <h2 className='mt-2'>🕙 {place.timeToTravel}</h2>
          {/* <Button size="sm"><FaMapLocationDot /></Button> */}
        </div>
      </div>
    </Link>
  )
}

export default PlaceCardItem  