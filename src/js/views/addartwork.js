import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link} from "react-router-dom";


const AddArtwork = () => {
    const [artwork, setArtwork] =useState(" ");
    const [artist, setArtist] =useState(" ");
    const [year, setYear] =useState(" ");
    const [location, setLocation] =useState(" ");

    const {store, actions} = useContext (Context);

    const addArtwork = () => {
        const newEntry = {
            artwork, artist, year, location
        };
       actions.addArtwork(newEntry);
       setArtwork(" ");
       setArtist(" ");
       setYear(" ");
       setLocation(" ");
       
    };
    return(<>
       <Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
                List of artworks
				</span>
		</Link>
        <div className="input_container">
         <label>Artwork</label>
         <input type="text" placeholder="Artwork" value={artwork} onChange={(e) =>setArtwork(e.target.value)}/>
         <label>Artist</label>
         <input type="text" placeholder="Artist"  value={artist} onChange={(e) =>setArtist(e.target.value)}/>
         <label>Year</label>
         <input type="text" placeholder="Year"  value={year} onChange={(e) =>setYear(e.target.value)}/>
         <label>Location</label>
         <input type="text" placeholder="Location"  value={location} onChange={(e) =>setLocation(e.target.value)}/>
         <button onClick={addArtwork}>Add artwork</button>
    </div>
    </>
    );
}

export default AddArtwork;

