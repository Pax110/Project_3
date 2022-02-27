import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-114.05);
  const [lat, setLat] = useState(51.046);
  const [zoom, setZoom] = useState(12);
  const [center, setCenter] = useState([-114.05, 51.046]);

  // Initialize map when component mounts
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true,
    });

    function setupMap() {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: zoom,
      });

      map.addControl(new mapboxgl.NavigationControl(), "top-right");

      map.on("move", () => {
        setLng(map.getCenter().lng.toFixed(4));
        setLat(map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));
      });
      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav, "top-left");
      // Clean up on unmount
      return () => map.remove();
    }

    function successLocation(position) {
      setupMap([position.coords.longitude, position.coords.latitude]);
    }
    function errorLocation() {
      setupMap([-114.05, 51.046]);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //Below code's How you'd do in vanilla js container: "map" and using getElementById(in index.html) as opposed to using useRef in react

  // map.addControl(directions, "top-left");

  return (
    <div>
      <div className="map-container" ref={mapContainerRef}>
        <div className="sidebarStyle">
          <div>
            Longitude: {lng} | Latitude: {lat}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
