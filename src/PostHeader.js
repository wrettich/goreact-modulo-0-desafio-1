import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => {
	return <header className="post-header">
			<div className="avatar">
				<img src={props.img} className="thumb" alt={props.name}></img>
			</div>
			<h2>{props.name}</h2>
			<span>{props.time}</span>
		</header>;
}

PostHeader.propTypes = {
	name: PropTypes.string,
	time: PropTypes.string,
};

export default PostHeader;
