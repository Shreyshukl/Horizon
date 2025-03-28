import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  const itinerary = trip?.tripData?.[0]?.travelPlan?.itinerary;
  console.log("Itinerary:", itinerary);

  if (!itinerary || typeof itinerary !== "object") return null;

  let formattedItinerary = [];

  if (Array.isArray(itinerary?.days)) {
    // Format: { days: Array }
    formattedItinerary = itinerary.days.map((day, index) => ({
      day: day.day ? `Day ${day.day}` : `Day ${index + 1}`,
      places: Array.isArray(day.places) ? day.places : [],
      bestTimeToVisit: day.bestTimeToVisit || "",
      theme: day.theme || "",
    }));
  } else {
    // Format: { day1: { ... }, day2: { ... }, ... } or any other object-based format
    formattedItinerary = Object.entries(itinerary)
      .filter(([key, value]) => typeof value === "object" && value !== null)
      .sort(([a], [b]) => a.localeCompare(b)) // Ensure days appear in order
      .map(([key, details]) => {
        // Detect places array dynamically
        const placesKey = Object.keys(details).find(
          (k) => Array.isArray(details[k]) && details[k].every((item) => item.placeName)
        );
        return {
          day: key.replace(/[^0-9]/g, "") ? `Day ${key.replace(/[^0-9]/g, "")}` : key.toUpperCase(),
          places: placesKey ? details[placesKey] : [],
          bestTimeToVisit: details.bestTimeToVisit || "",
          theme: details.theme || "",
        };
      });
  }

  return (
    <div>
      <h2 className="font-bold text-lg my-5">Places to Visit</h2>
      <div>
        {formattedItinerary.map(({ day, places, bestTimeToVisit, theme }, index) => (
          <div key={index} className="mt-5">
            {/* Day Title */}
            <h2 className="font-medium text-lg">{day}</h2>

            {/* Theme of the Day */}
            {theme && (
              <h3 className="font-medium text-md text-blue-600">{theme}</h3>
            )}

            {/* Best Time to Visit */}
            {bestTimeToVisit && (
              <h2 className="font-medium text-sm text-orange-600">
                {bestTimeToVisit}
              </h2>
            )}

            {/* Grid Layout for Places */}
            <div className="grid md:grid-cols-2 gap-5">
              {places.map((place, idx) => (
                <PlaceCardItem key={idx} place={place} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
