import React, { useEffect, useState } from "react";
import axios from "axios";
import '../style.css';
import { useNavigate } from "react-router-dom";


const Beaches = () => {

  const apiKey = "1cd26fdfc8ba6b01e0fde9e24f15d2de";
  const place = "beaches";
  let size = "url_m"

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const [photo, setPhotos] = useState([]);
  const fetchPhotoData = () => {
    axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${place}&per_page=55&extras=${size}&format=json&nojsoncallback=1`)
      .then(data => { setPhotos(data.data.photos.photo) })
  }

  useEffect(() => {
    fetchPhotoData()
  }, []);

  return (
    <div id='viewport'>
      <div className="header">
        <h1><i>Snapshot</i></h1>
        <div><input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} /><img src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=search" alt="search" /></div>
        <ul>
          <li><button onClick={() => { navigate("/Mountain") }}>Mountain</button></li>
          <li><button onClick={() => { navigate("/Beaches") }}>Beaches</button></li>
          <li><button onClick={() => { navigate("/Birds") }}>Birds</button></li>
          <li><button onClick={() => { navigate("/Food") }}>Food</button></li> 
           

        </ul>
      </div>
      <h3>Beaches Pictures</h3>
      <hr />
      <div className="scroll">
        <div className="grid.gallery">
          {
            photo.map((photos, index) =>
              <img className="grid-image" src={`https://live.staticflickr.com/${photos.server}/${photos.id}_${photos.secret}.jpg`} alt={photos.title} key={index} />
            )
          }
        </div>
      </div>
    </div>
  )
};

export default Beaches;
