import React from "react";
import EarthquakeCard from "./EarthquakeCard";
import EarthquakeMap from "./EarthquakeMap";

function EarthquakeList(props) {
  const { earthquakes } = props;
  return (
    <div>
      <h2>List of earthquakes</h2>
      <ul>
        {console.log(props)}
        {earthquakes.map(earthquake => {
          return (
            <section key={earthquake.id}>
              <li className="leaflet-container">
                <EarthquakeCard earthquake={earthquake} />
                <EarthquakeMap earthquake={earthquake} />
              </li>
            </section>
          );
        })}
      </ul>
    </div>
  );
}

export default EarthquakeList;
