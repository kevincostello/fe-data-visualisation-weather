import React, { Component } from "react";

// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet;
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
// const { LeafletMap } = Map;

class EarthquakeMap extends Component {
  state = {
    lat: 44.2,
    lng: -103.6459,
    zoom: 5
  };
  render() {
    const { earthquakes } = this.props;
    const positionCentre = [this.state.lat, this.state.lng];

    return (
      // <LeafletMap center={position} zoom={this.state.zoom}>
      <Map center={positionCentre} zoom={4} className="leaflet-container">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {earthquakes.map(earthquake => {
          const { coordinates } = earthquake.geometry;
          const position = [coordinates[1], coordinates[0]];
          return (
            <Marker position={position} key={earthquake.id}>
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

export default EarthquakeMap;
