import React from 'react';

import PhotosActions from '../../actions/PhotosActions';

import './index.styl';

const GallerySearch = React.createClass({
	getInitialState() {
		return {
			query: ''
		};
	},

	handlePhotosSearch(e) {
		e.preventDefault();

		PhotosActions.search(this.state.query);
	},

	handleOnChangeQuery(e) {
		this.setState({
			query: e.target.value
		});
	},

	render() {
		return (
			<div className='gallery-search'>
				<form onSubmit={this.handlePhotosSearch}>
					<input
						type='search'
						name='search'
						value={this.state.query}
						placeholder='Find photos...'
						className='gallery-search__field'
						onChange={this.handleOnChangeQuery}
					/>
					<button type='submit' value='Search' className='gallery-search__button'>Search</button>
				</form>
			</div>
		);
	},
});

export default GallerySearch;
