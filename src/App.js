import React, {useState} from 'react';
import ReactMapGL, {Marker} from "react-map-gl";
import dotenv from 'dotenv';
import * as artData from "./data/art.json";
// import * as artData from "./data/skateboard-parks.json";


function App() {
  dotenv.config();
  const [viewport, setViewport] = useState({
    //OTTAWA
    // latitude: 45.4211,
    // longitude: -75.6903,
    //MTL
    latitude: 45.485270,
    longitude: -73.581420,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })
  const markerStyle = {
    fontSize: '15px',
    color: 'black'
  }
 return(
   <div>
     <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/alymarguerite/ck30gb37i0ynh1cm8m7xlk465"
      // mapStyle="mapbox://styles/alymarguerite/ck30gwnu40z7y1cm8lumnxcoe"
      onViewportChange={viewport => {
          setViewport(viewport);
      }}
      >
        {artData.features.map((art) => (
          <Marker 
          key={art.NoInterne}
          longitude={JSON.parse(art.CoordonneeLongitude)}
          latitude={JSON.parse(art.CoordonneeLatitude)}
          >
            <div style={markerStyle}>ART</div>
          </Marker>
        ))}
     </ReactMapGL>
   </div>
 );
}

export default App;
