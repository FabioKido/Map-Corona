import React from 'react';
import { Link } from 'gatsby';

import './styles.css';

const Footer = () => {
  return (
  	<div className='footer'>
  		<div>
        <h1>Veja mais</h1>
        <section>
          <Link className='link' to='/terms-policy'>Termos e Política do site</Link>
        </section>
      </div>
  	</div>
	);
}

export default Footer;
