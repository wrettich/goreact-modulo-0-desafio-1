import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => {

	const styles = { backgroundImage: `url(${props.img})`};

	return <header className="post-header">
			<div className="avatar">
				<figure className="thumb" style={styles}></figure>
			</div>
			<h2 className="author">{props.name}</h2>
			<span className="helper">{props.time}</span>
		</header>;
}

PostHeader.propTypes = {
	name: PropTypes.string,
	time: PropTypes.string,
};

export default PostHeader;
