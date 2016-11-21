export default {
	authorize() {
		VK.init({
			apiId: 5737046,
			status: false,
			onlyWidgets: false
		});

		VK.Api.call('photos.search', {count: 1}, function() {}); // first call is always empty, I don't know why
	},

	photosSearch(query, callback) {
		const params = {
			q: query,
			start_time: 0,
			end_time: Math.round(Date.now() / 1000),
			count: 12,
			v: '5.60'
		};

		VK.Api.call('photos.search', params, function(r) {
			const items = r.response.items.map(item => {
				return {
					src: item.photo_604
				}
			});
			callback(items);
		});
	}
};
