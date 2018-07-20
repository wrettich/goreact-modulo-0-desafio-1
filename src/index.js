import React, { Component} from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';

import './style.scss';

class App extends Component {
	state = {
		posts: [
			{
				id: 1,
				img:
					"https://instagram.fgig4-1.fna.fbcdn.net/vp/26ad29c6ed9a936497cbc1c7ec59c2ab/5BCC2190/t51.2885-19/s150x150/17493454_191394941354554_2010847402440785920_a.jpg?_nc_eui2=AeFzyQimSQwFZGBJI5Q3EIvgpjNykIUqkY0FAqRT7yzYsDFzcFe98uJh0RJoCIjvm0sSVVZITGnOeZ8SVJfqkcEGWiNfl9ki6aBXLnGN-sM7Wg",
				name: "Wallace Rettich",
				time: "há 3 minutos",
				message: "Aqui vai uma mensagem bem maneira"
			},
			{
				id: 2,
				img: "http://placehold.it/60x60",
				name: "Rocketseat",
				time: "há 10 minutos",
				message: "Aqui vai uma mensagem bem maneira 2"
			}
		]
	};
	render() {
		return (
			<div className="app">
				<Header />
				<section>
					{this.state.posts.map(post => <Post key={post.id} post={post} />)}
				</section>
			</div>
		);
	}
}
render(<App />, document.getElementById('app'));
