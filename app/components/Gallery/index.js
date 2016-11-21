import React from 'react';

import GallerySearch        from '../GallerySearch';
import GallerySearchResults from '../GallerySearchResults';
import GalleryFavorites     from '../GalleryFavorites';

import './index.styl';

const Gallery = React.createClass({
	render() {
		return (
			<div className='gallery'>
				<h1 className='gallery__title'>Gallery</h1>
				<div className='gallery__search'>
					<GallerySearch />
				</div>
				<div className='gallery__row'>
					<div className='gallery__content'>
						<h2 className='gallery__subtitle'>Results</h2>
						<GallerySearchResults />
					</div>
					<div className='gallery__aside'>
						<h2 className='gallery__subtitle'>Favorites</h2>
						<GalleryFavorites />
					</div>
				</div>
			</div>
		);
	}
});

export default Gallery;
