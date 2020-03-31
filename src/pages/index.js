import React from 'react';
import { Helmet } from "react-helmet";
//import { Link } from 'gatsby';

import Layout from '../components/Layout';

const Index = () => {
	return (
		<Layout  page={'Coronavirus - About'}>
			<Helmet>
				<title>Coronavirus - About</title>
			</Helmet>
			<p>Olá Mundo!</p>
		</Layout>
	);
}

export default Index;
