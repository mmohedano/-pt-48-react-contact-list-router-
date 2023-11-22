// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// const ArtworkDetails = () => {
    
// 	const {newEntryId} = useParams();
//     const {store, actions} = useContext(Context);
//     const [newEntry, updateNewEntry] = useState({id: null, inputArt: ""})
//     const [inputArt, updateInputArt] = useState ("")

//     useEffect (() => {
//         const [entryFiltered] = store.artworkList.filter(newEntry => `${newEntry.id}` === newEntryId)
//         updateNewEntry(entryFiltered);
//     }, [])

//     const update = () =>{
//         const artworkList = store.artworkList.map(listItem => {
//             if(`${listItem.id}` === newEntryId) {
//                 return {id: listItem.id, inputArt} 
//             } 
//             return listItem;
//         });
//         actions.updateList(artworkList);
        
//     }

//     return(<>
//     Detalles de la obra
//     <h1>{newEntry.inputArt}</h1>
//     <input type="text" placeholder="Editar" value={inputArt} onChange={(e) => updateInputArt(e.target.value)}/>
//     <button onClick={() => update()}>Actualizar</button>
//     </>)
// }

// export default ArtworkDetails;