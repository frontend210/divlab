import React from 'react';

export default function Paragraph(props) {
	let divStyle = {
		color: 'black',
		height: '100%',
		width: '100%',
	};

	const { content, id } = props.info;
	return content.length || id.length ? (
		<div id={id} style={divStyle}>
			<p>{content}</p>
		</div>
	) : (
		<img alt="" src="images/ParagraphExample.png" />
	);
}
