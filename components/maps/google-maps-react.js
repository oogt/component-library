import React, { useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Flex, Box } from "rebass";

const containerStyle = {
  position: "relative",
};

// https://mapstyle.withgoogle.com/
const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
];

const markers = [
  {
    name: "OOGT",
    title: "The title for OOGT",
    position: {
      lat: 51.5796,
      lng: 5.06341,
    },
  },
  {
    name: "Chez Robèrt",
    title: "The title for Chez Robèrt",
    position: {
      lat: 51.52355,
      lng: 5.07,
    },
  },
];

const GoogleMaps = ({ google, onMarkerClick, onInfoWindowClose }) => {
  const [activeMarker, setActiveMarker] = useState({});
  console.log(activeMarker);
  return (
    <Flex width={1} alignItems="center" height="100vh">
      <Box width={0.5} height="100%">
        <Map
          google={google}
          containerStyle={containerStyle}
          initialCenter={{ ...markers[0].position }}
          zoom={12}
          styles={mapStyle}
          disableDefaultUI
        >
          {markers.map((m) => (
            <Marker
              {...m}
              onClick={(props, marker) => {
                setActiveMarker(marker);
              }}
            />
          ))}
          <InfoWindow
            marker={activeMarker === {} ? undefined : activeMarker}
            visible={activeMarker !== {}}
          >
            <p>{activeMarker.name}</p>
          </InfoWindow>
        </Map>
      </Box>
      <Box width={0.5} mx={5}>
        locaties
      </Box>
    </Flex>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCrQS_i7VIlfumWW1Zv6ow9J6NVahP2p_k",
})(GoogleMaps);
