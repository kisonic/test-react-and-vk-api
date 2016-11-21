import React from 'react';

import PhotosActions from '../../actions/PhotosActions';

import './index.styl';

const GalleryGrid = React.createClass({
	handleOnClick(e) {
		e.preventDefault();
		const item = this.props.items[e.target.getAttribute('data-item-id')];
		if (item.isFavorite) {
			PhotosActions.deleteFavorite(item);
		} else {
			PhotosActions.addFavorite(item);
		}
	},

	render() {
		return (
			<div className={'gallery-grid' + (this.props.responsive ? ' _responsive' : '')}>
				{
					this.props.items.length
						?
							this.props.items.map((item, id) =>
								<div key={id} className='gallery-grid__item'>
									<div className='gallery-grid__item-inner'>
										<img
											className='gallery-grid__item-img'
											src={item.src}
											alt=''
										/>
										<a
											href='#'
											data-item-id={id}
											className={'gallery-grid__item-button' +
												(item.isFavorite ? ' _active' : '')
											}
											onClick={this.handleOnClick}
										></a>
									</div>
								</div>
							)
						:
							<div className='gallery-grid__empty'>{this.props.messageIfEmpty}</div>
				}
			</div>
		);
	}
});

export default GalleryGrid;
