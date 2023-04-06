import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
	<footer>
		<div className="footer-content">
			<div className="socials">
				<a href="https://github.com/rodrigosousa11" target="_blank">
					<FaGithub className='social-icon' />
				</a>
				<a href="mailto:rodrigosousa1105@gmail.com">
					<FaEnvelope className='social-icon' />
				</a>
				<a href="https://www.linkedin.com/in/rodrigo-sousa-bb8a69262" target="_blank">
					<FaLinkedin className='social-icon' />
				</a>		
			</div>
		</div>
		<div className="copyright">
			<p>&copy; 2023 Rodrigo Sousa</p>
		</div>
	</footer>
  );
}

export default Footer;
