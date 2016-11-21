import ReactDOM from 'react-dom';
import React from 'react';

import './styles/base.styl';

import SessionActions from './actions/SessionActions';

import Gallery from './components/Gallery';

SessionActions.authorize();

ReactDOM.render(
	<Gallery />,
	document.getElementById('mount-point')
);
