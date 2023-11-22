import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link} from "react-router-dom";

const List = () => {
    const {store, actions} =useContext(Context);


    return(<>
        <Link to="/create">
				<span className="btn btn-info btn-lg" href="#" role="button">
                Add new artwork
				</span>
		</Link>
   
    <ul>
        {store.artworkList.map((listItem, index) => <li key={index}>{listItem.artwork}</li>)}
        {store.artworkList.map((listItem, index) => <li key={index}>{listItem.artist}</li>)}
        {store.artworkList.map((listItem, index) => <li key={index}>{listItem.year}</li>)}
        {store.artworkList.map((listItem, index) => <li key={index}>{listItem.location}</li>)}
    </ul>
    </>)
}

export default List;