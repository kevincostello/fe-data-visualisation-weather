import React from "react";

function EarthquakeCard(props) {
  const { id, properties, geometry } = props.earthquake;
  const { place, time, mag, url } = properties;
  return (
    <div>
      <h3>{id}</h3>
      <h3>Location of earthquake: {place}</h3>
      <h3>Time of earthquake: {Date(time)}</h3>
      <h3>Time of earthquake: {new Date(time).toDateString()}</h3>
      <h3>Magnitude of earthquake: {mag}</h3>
      <h3>Link to information about earthquake: {url}</h3>
      <h4>
        Coordinates are: {geometry.coordinates[0]} + {geometry.coordinates[1]} +{" "}
        {geometry.coordinates[2]}
      </h4>
    </div>
  );
}

export default EarthquakeCard;
