import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import './style.css';

const OLD_ICON = L.divIcon({
  className: 'custom-div-icon hidden',
  html:
    "<div class='marker-container'><span class='marker-text'>Local da Ocorrência</span></div><div class='marker-line'></div><i class='material-icons marker-icon'>arrow_drop_down_circle</i>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
});

export default function Maps({ currentPosition, showMarker }) {
  const [icon, setIcon] = useState(OLD_ICON);

  useEffect(() => {
    if (showMarker === true) {
      handleMarker();
    }
  }, [showMarker]);

  const handleMarker = () => {
    const newIcon = L.divIcon({
      className: 'custom-div-icon',
      html:
        "<div class='marker-container'><span class='marker-text'>Local da Ocorrência</span></div><div class='marker-line'></div><i class='material-icons marker-icon'>arrow_drop_down_circle</i>",
      iconSize: [30, 42],
      iconAnchor: [15, 42],
    });
    setIcon(newIcon);
  };

  return (
    <Map className="mapView" center={currentPosition} zoom={16}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={icon} position={currentPosition} />
    </Map>
  );
}
