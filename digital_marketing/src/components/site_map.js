import React from "react";
import "../styles/site_map.css";
import { Link } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
const apiKey = "Write your API KEY";

const mapStyles = {
  width: "50%",
  height: "50%",
  top: "25%",
  left: "25%",
};

const SiteMap = () => {
  return (
    <div>
      <div class="site_map_header">
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
        {
          <Map
            google={window.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Set your initial map center
          >
            <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
          </Map>
        }
      </div>
      <div className="false_box"></div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: apiKey,
})(SiteMap);
