import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

class Post extends Component {

	static defaultProps = {
		// childre
	}

	render() {
		return <article>
				<PostHeader time="há 3 minutos" name="wallace" img="https://instagram.fgig4-1.fna.fbcdn.net/vp/26ad29c6ed9a936497cbc1c7ec59c2ab/5BCC2190/t51.2885-19/s150x150/17493454_191394941354554_2010847402440785920_a.jpg?_nc_eui2=AeFzyQimSQwFZGBJI5Q3EIvgpjNykIUqkY0FAqRT7yzYsDFzcFe98uJh0RJoCIjvm0sSVVZITGnOeZ8SVJfqkcEGWiNfl9ki6aBXLnGN-sM7Wg" />
			</article>;
	}
}

export default Post;
