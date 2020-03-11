import React from "react";
import EarthquakeCard from "./EarthquakeCard";

function EarthquakeList(props) {
  const { earthquakes, earthquakeCount, query } = props;
  const { starttime, endtime } = query;
  return (
    <div>
      <h2>List of earthquakes</h2>
      <h4>
        Time period: {starttime} to {endtime}
      </h4>
      <h4>Count of earthquakes recorded: {earthquakeCount}</h4>
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
