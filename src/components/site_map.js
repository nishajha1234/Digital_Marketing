import React from "react";
import "../styles/site_map.css";
import { Link } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const apiKey = "Write your API KEY";

const containerStyle = {
  width: "50%",
  height: "50%",
  margin: "auto",
  marginTop: "2rem",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const SiteMap = () => {
  return (
    <div>
      <div className="site_map_header">
        <div className="site_map_background">
          <nav className="site_map_navbar">
            <div className="site_map_nav-left">
              <i className="fa-solid fa-dove fa"></i>
              <b>MARKET WINGS</b>
            </div>
            <div className="site_map_nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </nav>
        </div>
      </div>

      <div className="map">
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>

      <div className="false_box"></div>
    </div>
  );
};

export default SiteMap;
