import React, {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import dotenv from 'dotenv';
import * as artData from "./data/art.json";
import useLocation from "./hooks/useLocation";

function App() {
  dotenv.config();
  const location = useLocation();
  const [viewport, setViewport] = useState({
    //MTL
    latitude: 45.485270,
    longitude: -73.581420,
    width: window.innerWidth,
    height: window.innerHeight,
    zoom: 10.8
  })
 const [selectedArt, setSelectedArt] = useState(null);

 useEffect(() => {
   const handleResize= () => {
    setViewport({
      ...viewport,
      width: window.innerWidth,
      height: window.innerHeight,
    })
   };
   window.addEventListener('resize', handleResize);
   return () => {
     window.removeEventListener('resize', handleResize);
   }
 })
 useEffect(() => {
  if (location) {
    setViewport((vp) => ({
      ...vp,
      ...location,
      zoom: 11,
    }));
  }
}, [location, setViewport]);

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
            <button 
            className="marker-btn"
             onClick={e => {
              e.preventDefault();
              setSelectedArt(art);
    }}
            >
              <img src="/images/easel_1.png" alt="palette icon"/>
            </button>
          </Marker>
        ))}
       {location ? (
          <Marker
            latitude={location.latitude}
            longitude={location.longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <span style={{ fontSize: `${viewport.zoom * 0.5}rem` }}>📸</span>
          </Marker>
        ) : null}
        {selectedArt ? (
      <Popup 
      className="pop-up"
      latitude={JSON.parse(selectedArt.CoordonneeLatitude)}
      longitude={JSON.parse(selectedArt.CoordonneeLongitude)}
      onClose={() => {
        setSelectedArt(null);
      }}
      >
        <div>
        <h2>Pièce : {selectedArt.Titre}</h2>
<h3>Artiste : {selectedArt.Artistes[0].Prenom} {selectedArt.Artistes[0].Nom}</h3>
{/* TODO: some addresses set to null, catch this */}
        <p>Addresse : {selectedArt.AdresseCivique}</p>
        <button>cliqué pour les directions</button>
        </div>
      </Popup>
        ) : null}
     </ReactMapGL>
   </div>
 );
}

export default App;
