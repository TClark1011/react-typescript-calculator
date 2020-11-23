import React from 'react';

const GitButton: React.FC = () => {
	const iconStyles = {
		color: 'white',
		backgroundColor: '#1f1f1f',
		borderRadius: '50px',
		padding: '8px',
		position: 'absolute',
		top: '16px',
		left: '16px',
		textDecoration: 'none',
	};
	return (
		<>
			<style>
				.devicon-github-plain:before {'{'}font-size:32px;
				{'}'}
			</style>
			<link
				rel='stylesheet'
				href='https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css'
			/>
			<a
				href='https://github.com/TClark1011/react-typescript-calculator'
				className='devicon-github-plain'
				style={iconStyles}
			></a>
		</>
	);
};

export default GitButton;
