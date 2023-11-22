import React, { useContext} from "react";
import { Context } from "../store/appContext";
import { Link} from "react-router-dom";

const List = () => {
    const {store, actions} =useContext(Context);

    const deleteArtwork = (id) =>{
        actions.deleteArtwork(id);
    };
  


    return(<>
    <div className="list_container">
        <div className="add_new">
        <Link to="/create">
				<span className="btn btn-warning btn-lg" href="#" role="button">
                Add new artwork
				</span>
		</Link>
        </div>
   <div className="list_update">
    <ul>
        {store.artworkList.map((listItem, id) => <li key={id}>
            <div className="items_updated">
            <span>{listItem.artwork}</span> 
           
            <br />
            <span>{listItem.artist}</span>
            <br />
            <span>{listItem.year}</span>
            <br />
            <span>{listItem.location}</span>
            {/* <Link to={`/artwork/${id}`}>
				<span className="btn btn-warning btn-lg " href="#" role="button">
                Edit
				</span>
		</Link> */}
            </div>

            <div>
                <button className="delete" onClick={() => deleteArtwork(id)}>Delete</button>
            </div>
            </li>)}
            
        {/* {store.artworkList.map((listItem, index) => <li key={index}>{listItem.artist}</li>)}
        {store.artworkList.map((listItem, index) => <li key={index}>{listItem.year}</li>)}
        {store.artworkList.map((listItem, index) => <li key={index}>{listItem.location}</li>)} */}
        
    </ul>
    </div>
    </div>
    </>)
}

export default List;