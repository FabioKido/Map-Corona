import React from 'react';

import Header from './Header';

import './styles.css';

const Layout = ({ children, page }) => {
	return (
		<div>
			<Header page={page} />
			{children}
		</div>
	);
}

export default Layout;
