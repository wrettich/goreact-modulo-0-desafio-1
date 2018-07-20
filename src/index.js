import React, { Component} from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';

import './style.scss';

class App extends Component {

	render() {
		return (
			<div className="app">
				<Header />
				<section>
					<Post />
				</section>
			</div>
		);
	}
}

render(<App />, document.getElementById('app'));
