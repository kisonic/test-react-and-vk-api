import React from 'react';

import PhotosStore from '../../stores/PhotosStore';

import GalleryGrid from '../GalleryGrid';

function getStateFromFlux() {
	return {
		items: PhotosStore.getPhotos()
	};
}

const GallerySearchResults = React.createClass({
	getInitialState() {
		return getStateFromFlux();
	},

	componentDidMount() {
		PhotosStore.addChangeListener(this._onChange);
	},

	componentWillUnmount() {
		PhotosStore.removeChangeListener(this._onChange);
	},

	render() {
		return (
			<GalleryGrid items={this.state.items} messageIfEmpty='No results' responsive />
		);
	},

	_onChange() {
		this.setState(getStateFromFlux());
	}
});

export default GallerySearchResults;
