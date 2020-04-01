import React from 'react';
import { Helmet } from "react-helmet";

import Header from './Header';
import Footer from './Footer';

import Icon from '../assets/icon.svg';

import './styles.css';

const Layout = ({ children, page, footer }) => {

	if(footer){
		return (
			<div>
				<Helmet>
					<link rel="icon" type="image/x-icon" href={Icon} />
				</Helmet>
				<Header page={page} />
				{children}
				<Footer />
			</div>
		);
	}
	if(!footer){
		return (
			<div>
				<Helmet>
					<link rel="icon" type="image/x-icon" href={Icon} />
				</Helmet>
				<Header page={page} />
				{children}
			</div>
		);
	}
}

export default Layout;
