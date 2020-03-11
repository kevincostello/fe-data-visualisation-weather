import React, { Component } from "react";
import ReactDOM from "react-dom";

// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet;
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
const { LeafletMap } = Map;

class EarthquakeMap extends Component {
  state = {
    lat: 44.2,
    lng: -103.6459,
    zoom: 5
  };
  render() {
    // const { coordinates } = this.props.earthquakes[0].geometry;
    const { earthquakes } = this.props;
    // const position = [this.state.lat, this.state.lng];
    // const position = [coordinates[1], coordinates[0]];
    // const coordinatesCentre = earthquakes[0].geometry.coordinates;
    // const positionCentre = [coordinatesCentre[1], coordinatesCentre[0]];
    const positionCentre = [this.state.lat, this.state.lng];
    // console.log(
    //   "props are: ",
    //   coordinatesCentre,
    //   earthquakes[0].geometry.coordinates
    // );

    return (
      // <LeafletMap center={position} zoom={this.state.zoom}>
      // <Map center={position} zoom={3} className="leaflet-item">
      <Map center={positionCentre} zoom={4} className="leaflet-container">
        {/* <Map center={position} zoom={this.state.zoom}> */}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {earthquakes.map(earthquake => {
          const { coordinates } = earthquake.geometry;
          const position = [coordinates[1], coordinates[0]];
          console.log("position is: ", position);
          return (
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          );
        })}
      </Map>
      // </LeafletMap>
    );
  }
}

// ReactDOM.render(<EarthquakeMap />, document.getElementById("container"));

export default EarthquakeMap;
