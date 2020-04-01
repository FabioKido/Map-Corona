import React from 'react';
import { Link } from 'gatsby';

import './styles.css';

const Header = ({ page }) => {
  return (
  	<div className='header'>
  		<div>
        <Link className='link' to='/'>{page}</Link>
      </div>
  	</div>
	);
}

export default Header;
