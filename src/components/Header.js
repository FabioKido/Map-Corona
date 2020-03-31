import React from 'react';
import { Link } from 'gatsby';

import './styles.css';

const Header = ({ page }) => {
  return (
  	<div className='header'>
  		<div>
        <Link className='link' to='/'>{page}</Link>
        <div className='nav'>
          <section>
            <h1>Virus</h1>
            <Link to='/pt-br'>Dengue</Link>
          </section>
        </div>
      </div>
  	</div>
	);
}

export default Header;
