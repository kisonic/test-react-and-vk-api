import Dispatcher from '../dispatcher';

import api from '../api';

const PhotosActions = {
	search(query) {
		api.photosSearch(query, (result) => {
			Dispatcher.dispatch({
				type: 'search',
				items: result
			});
		});
	},

	addFavorite(item) {
		Dispatcher.dispatch({
			type: 'addFavorite',
			item: item
		});
	},

	deleteFavorite(item) {
		Dispatcher.dispatch({
			type: 'deleteFavorite',
			item: item
		});
	}
};

export default PhotosActions;
