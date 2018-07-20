import React, { Component } from 'react';
import PostHeader from './PostHeader';

class Post extends Component {
	state = {
		img:"",
		name: "",
		time: "",
		message: ""
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		return { img: nextProps.post.img, name: nextProps.post.name, time: nextProps.post.time, message: nextProps.post.message };
	}

	render() {
		return <article className="post">
			<PostHeader time={this.state.time} name={this.state.name} img={this.state.img} />

				<div className="content">
					<p>{this.state.message}</p>
				</div>
			</article>;
	}
}

export default Post;
