import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link} from "react-router-dom";

const List = () => {
    const {store, actions} =useContext(Context);


    return(<>
        <Link to="/create">
				<span className="btn btn-primary btn-lg" href="#" role="button">
                Add new artwork
				</span>
		</Link>
   
    <ul>
        {store.artworkList.map((listItem, index) => <li key={index}>{listItem}</li>)}
    </ul>
    </>)
}

export default List;