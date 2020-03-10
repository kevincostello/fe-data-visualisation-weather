import React, { Component } from "react";
import ReactDOM from "react-dom";

// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet;
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
const { LeafletMap } = Map;

class EarthquakeMap extends Component {
  state = {
    lat: 63.102,
    lng: -151.6459,
    zoom: 5
  };
  render() {
    console.log("props are: ", this.props);
    const { coordinates } = this.props.earthquake.geometry;
    // const position = [this.state.lat, this.state.lng];
    const position = [coordinates[1], coordinates[0]];
    return (
      // <LeafletMap center={position} zoom={this.state.zoom}>
      <Map center={position} zoom={5} className="leaflet-item">
        {/* <Map center={position} zoom={this.state.zoom}> */}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
      // </LeafletMap>
    );
  }
}

// ReactDOM.render(<EarthquakeMap />, document.getElementById("container"));

export default EarthquakeMap;
