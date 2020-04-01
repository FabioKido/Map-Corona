import React from 'react';

import Header from './Header';
import Footer from './Footer';

import './styles.css';

const Layout = ({ children, page }) => {
	return (
		<div>
			<Header page={page} />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
