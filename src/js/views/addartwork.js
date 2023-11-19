import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link} from "react-router-dom";


const AddArtwork = () => {
    const [inputValue, setInputValue] =useState(" ");
    const {store, actions} = useContext (Context);

    const addArtwork = () => {
       actions.addArtwork(inputValue);
       setInputValue(" ");
    };
    return(<>
       <Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
                List of artworks
				</span>
		</Link>
    <input type="text" onChange={(e) =>setInputValue(e.target.value)}/>
    <button onClick={addArtwork}>Add artwork</button>
    </>
    );
}

export default AddArtwork;

