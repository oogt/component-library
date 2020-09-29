import React, { useState } from "react";
import styled from "styled-components";
import { Map as Locator, Search, Info } from "react-store-locator";
import { Flex, Box } from "rebass";

const locations = [
  {
    id: 1,
    lat: 51.5796,
    lng: 5.06341,
    show: false,
    name: "OOGT",
    address: "Kraaivenstraat 25-12",
    zipCode: "5048 AB",
    city: "Tilburg",
  },
  {
    id: 2,
    lat: 51.52355,
    lng: 5.07,
    show: false,
    name: "Chez Robèrt",
    address: "Irenestraat 13",
    zipCode: "5051 NC",
    city: "Goirle",
  },
];

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

const StyledPin = styled.div`
  .pin {
    width: 40px;
    height: 40px;
    background: #f92150;
    color: #fff;
    border-radius: 40px;
    display: block;
    border: 0;
    transition: all 0.25s ease;
    cursor: pointer;

    &:hover {
      color: #f92150;
      background: #fff;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    background-color: #f92150 !important;
    color: #fff;
    padding: 0.5rem;
  }
`;

const Wrapper = styled(Flex)`
  input[type="text"] {
    padding: 1rem;
    border: 1px solid #eee;
    width: 100%;
  }

  ul {
    margin: 1rem 0;
    padding: 0;
  }

  li {
    padding: 2rem;
    margin: 0 -2rem 2rem;
    list-style: none;
    transition: all 0.25s ease;
    border: 1px solid #fff;

    &:hover {
      border: 1px solid #eee;
    }
  }

  .storeLocatorInput {
    display: none;
  }
`;

const MyPin = ({ name, show, id, handleLocationClick, ...props }) => (
  <StyledPin>
    <button
      className="pin"
      type="button"
      onClick={() => handleLocationClick(id)}
    >
      X
    </button>
    <Info show={show}>
      {name}

      <button type="button" onClick={handleLocationClick}>
        [x]
      </button>
    </Info>
  </StyledPin>
);

const Map = () => {
  const [visibleLocations, setVisibleLocations] = useState([]);
  return (
    <Wrapper width={1} alignItems="center">
      <Box width={0.5}>
        <Locator
          locations={locations}
          googleApiKey="AIzaSyCrQS_i7VIlfumWW1Zv6ow9J6NVahP2p_k"
          pin={MyPin}
          mapOptions={{
            disableDefaultUI: true,
          }}
          onChange={setVisibleLocations}
          mapStyle={mapStyle}
        />
      </Box>
      <Box width={0.5} mx={5}>
        <Search style={{ background: "white" }} placeholder="Uw woonplaats" />

        <div>
          <h2>Locations:</h2>
          <ul>
            {visibleLocations.map(
              ({ name, address, zipCode, city, ...props }) =>
                console.log(props) || (
                  <li key={name}>
                    {name}
                    <br />
                    {address}
                    <br />
                    {zipCode}
                    <br />
                    {city} <br />
                  </li>
                )
            )}
          </ul>
        </div>
      </Box>
    </Wrapper>
  );
};

export default Map;
