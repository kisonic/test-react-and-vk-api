import React from 'react';

import PhotosStore from '../../stores/PhotosStore';

import GalleryGrid from '../GalleryGrid';

function getStateFromFlux() {
	return {
		items: PhotosStore.getFavorites()
	};
}

const GalleryFavorites = React.createClass({
	getInitialState() {
		return {
			items: []
		};
	},

	componentDidMount() {
		PhotosStore.addChangeListener(this._onChange);
	},

	componentWillUnmount() {
		PhotosStore.removeChangeListener(this._onChange);
	},

	render() {
		return (
			<GalleryGrid items={this.state.items} messageIfEmpty='No favorites' />
		);
	},

	_onChange() {
		this.setState(getStateFromFlux());
	}
});

export default GalleryFavorites;
