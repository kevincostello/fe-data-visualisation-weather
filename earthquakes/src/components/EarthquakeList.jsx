import React from "react";
import EarthquakeCard from "./EarthquakeCard";

function EarthquakeList(props) {
  const { earthquakes } = props;
  return (
    <div>
      <h2>List of earthquakes</h2>
      <ul>
        {earthquakes.map(earthquake => {
          return (
            <section key={earthquake.id}>
              <li>
                <EarthquakeCard earthquake={earthquake} />
              </li>
            </section>
          );
        })}
      </ul>
    </div>
  );
}

export default EarthquakeList;
