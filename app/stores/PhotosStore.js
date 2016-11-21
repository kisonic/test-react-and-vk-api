import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher';

const CHANGE_EVENT = 'change';

let _photos = [];
let _favorites = [];

const PhotosStore = Object.assign({}, EventEmitter.prototype, {
	getPhotos() {
		return _photos;
	},

	getFavorites() {
		return _favorites;
	},

	emitChange() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

Dispatcher.register(function(action) {
	switch(action.type) {

		case 'search': {
			_photos = action.items.map(item => {
				if (_favorites.some(favorite => favorite.src === item.src)) {
					return Object.assign({}, item, {
						isFavorite: true
					});
				} else {
					return Object.assign({}, item, {
						isFavorite: false
					});
				}
			});

			PhotosStore.emitChange();
			break;
		}

		case 'addFavorite': {
			const id = _photos.findIndex(item => item.src === action.item.src);
			_photos[id].isFavorite = true;

			_favorites.push(Object.assign({}, action.item, {
				isFavorite: true
			}));

			PhotosStore.emitChange();
			break;
		}

		case 'deleteFavorite': {
			const id = _photos.findIndex(item => item.src === action.item.src);
			_photos[id].isFavorite = false;

			_favorites = _favorites.filter(item => item.src !== action.item.src);

			PhotosStore.emitChange();
			break;
		}

		default: {}

	}
});

export default PhotosStore;
