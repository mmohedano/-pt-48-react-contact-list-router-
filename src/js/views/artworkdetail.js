import React from "react";
import { useParams } from "react-router-dom";

const ArtworkDetails = () => {
    
	const params = useParams();

    return(<>
    Detalles de la obra
    <h1>{params.artworkid}</h1>
    </>)
}

export default ArtworkDetails;