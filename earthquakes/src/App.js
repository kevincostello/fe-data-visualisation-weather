import React from "react";
import "./App.css";
import Header from "./components/Header";
import EarthquakeList from "./components/EarthquakeList";
import EarthquakeMap from "./components/EarthquakeMap";
import axios from "axios";
import QueryForm from "./components/QueryForm";

class App extends React.Component {
  state = {
    earthquakes: [],
    isLoading: true,
    query: {
      starttime: "2014-01-01",
      endtime: "2014-01-02",
      format: "geojson",
      limit: 10
    },
    earthquakeCount: 0
  };
  render() {
    console.log(this.state);
    const { earthquakes, isLoading, earthquakeCount, query } = this.state;
    return (
      <div className="App">
        <Header />

        {isLoading ? (
          <h2>Loading data.........</h2>
        ) : (
          <>
            <QueryForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
            <EarthquakeList
              earthquakes={earthquakes}
              earthquakeCount={earthquakeCount}
              query={query}
            />
            <EarthquakeMap earthquakes={earthquakes} />
          </>
        )}
      </div>
    );
  }
  componentDidMount() {
    this.getEarthquakeData();
  }

  getEarthquakeData = () => {
    const { query } = this.state;
    const params = {
      endtime: query.endtime,
      starttime: query.starttime,
      // endtime: "2014-01-02",
      // starttime: "2014-01-01",
      format: query.format,
      limit: query.limit
    };
    const { endtime, starttime, format, limit } = params;
    const url = "https://earthquake.usgs.gov/fdsnws/event/1/query";
    axios
      .get(url, { params: { endtime, starttime, format, limit } })
      .then(({ data }) => {
        console.log("the data is: ", data, data.metadata.count);
        this.setState({
          earthquakes: data.features,
          isLoading: false,
          earthquakeCount: data.metadata.count
        });
      });
  };

  handleChange = event => {
    const { value, name } = event.target;
    console.log("the dates are: ", value, [name]);
    this.setState(currentState => {
      return {
        query: { ...currentState.query, [name]: value }
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getEarthquakeData();
  };
}

export default App;
