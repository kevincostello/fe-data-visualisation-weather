import React from "react";
import "./App.css";
import Header from "./components/Header";
import EarthquakeList from "./components/EarthquakeList";
import EarthquakeMap from "./components/EarthquakeMap";
import axios from "axios";

class App extends React.Component {
  state = { earthquakes: [], isLoading: true };
  render() {
    const { earthquakes, isLoading } = this.state;
    return (
      <div className="App">
        <Header />
        {isLoading ? (
          <h2>Loading data.........</h2>
        ) : (
          <>
            <EarthquakeList earthquakes={earthquakes} />
            <EarthquakeMap earthquakes={earthquakes} />
          </>
        )}
      </div>
    );
  }
  componentDidMount() {
    this.getEarthquakeData();
    // this.setState({
    //   earthquakes: [
    //     {
    //       type: "Feature",
    //       properties: {
    //         mag: 1.29,
    //         place: "10km SSW of Idyllwild, CA",
    //         time: 1388620296020,
    //         updated: 1457728844428,
    //         tz: -480,
    //         url: "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408890",
    //         detail:
    //           "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408890&;amp;format=geojson",
    //         felt: null,
    //         cdi: null,
    //         mmi: null,
    //         alert: null,
    //         status: "reviewed",
    //         tsunami: 0,
    //         sig: 26,
    //         net: "ci",
    //         code: "11408890",
    //         ids: ",ci11408890,",
    //         sources: ",ci,",
    //         types:
    //           ",cap,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
    //         nst: 39,
    //         dmin: 0.06729,
    //         rms: 0.09,
    //         gap: 51,
    //         magType: "ml",
    //         type: "earthquake",
    //         title: "M 1.3 - 10km SSW of Idyllwild, CA"
    //       },
    //       geometry: {
    //         type: "Point",
    //         coordinates: [-116.7776667, 33.6633333, 11.008]
    //       },
    //       id: "ci11408890"
    //     },
    //     {
    //       type: "Feature",
    //       properties: {
    //         mag: 1.1,
    //         place: "117km NW of Talkeetna, Alaska",
    //         time: 1388620046501,
    //         updated: 1558392330681,
    //         tz: -540,
    //         url:
    //           "https://earthquake.usgs.gov/earthquakes/eventpage/ak01421ig3u",
    //         detail:
    //           "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ak01421ig3u&;amp;format=geojson",
    //         felt: null,
    //         cdi: null,
    //         mmi: null,
    //         alert: null,
    //         status: "reviewed",
    //         tsunami: 0,
    //         sig: 19,
    //         net: "ak",
    //         code: "01421ig3u",
    //         ids: ",ak10992887,ak01421ig3u,",
    //         sources: ",ak,ak,",
    //         types:
    //           ",associate,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
    //         nst: null,
    //         dmin: null,
    //         rms: 0.57,
    //         gap: null,
    //         magType: "ml",
    //         type: "earthquake",
    //         title: "M 1.1 - 117km NW of Talkeetna, Alaska"
    //       },
    //       geometry: {
    //         type: "Point",
    //         coordinates: [-151.6459, 63.102, 14.1]
    //       },
    //       id: "ak01421ig3u"
    //     }
    //   ],
    //   isLoading: false
    // });
  }

  getEarthquakeData = () => {
    const url =
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02&limit=20";
    axios.get(url).then(({ data }) => {
      this.setState({ earthquakes: data.features, isLoading: false });
    });
  };
}

export default App;
