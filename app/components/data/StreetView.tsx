'use client'
import React, { useMemo } from "react";
import { GoogleMap, useJsApiLoader, Marker, StreetViewPanorama } from "@react-google-maps/api";
import { useSearchParams } from 'next/navigation'





const containerStyle = {
  width: "100%", // Use percentage for width
  height: "100vh", // Use viewport height for height
};

function Streetview() {
    
  const search = useSearchParams();
  // Access coordinates from query parameters directly
  const lat = parseFloat(search.get("lat")?.toString() || '-3.745');
  const lng = parseFloat(search.get("lng")?.toString() || '-38.523');

  const center = useMemo(() => ({
    lat,
    lng,
  }), [lat, lng]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBcJv9X32tYOumsnSGu1WLitEKdeS5k5XA",
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map); // Now TypeScript knows that setMap expects a google.maps.Map or null
  }, [center]);

  const onUnmount = React.useCallback(function callback() {
    setMap(null); // Set the map to null when unmounting
  }, []);


  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
    <StreetViewPanorama
        // position={center}
        // visible={true} // Auto-open Street View
      />
      {/* markers, info windows, etc. */}
      <Marker position={center} />

      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Streetview);
