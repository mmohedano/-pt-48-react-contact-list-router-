const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
			artworkList:[]
		},
		actions: {
			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
			addArtwork: ( newEntry) => {
			const store = getStore();
			const artworkList = [...store.artworkList, newEntry];
			setStore({...store, artworkList});
		},
		   deleteArtwork: (id) => {
			const store = getStore();
			const updateArtworkList = store.artworkList.filter((_,i) => i !== id);
			setStore({ ...store, artworkList: updateArtworkList });
		}, 
		    updateArtworkList: (artworkList) =>{
				const store = getStore();
				setStore({...store, artworkList});
			}

		}
	};
};

export default getState;
