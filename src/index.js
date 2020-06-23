import React from 'react';
import PropTypes from 'prop-types'

const CookieConsent = ({ cookieName, expires }) => {
	console.log(cookieName, expires)
	return (
		<div>
			Cookie Consent here
		</div>
	);
}

CookieConsent.propTypes = {
	cookieName: PropTypes.string,
	expires: PropTypes.number
};

CookieConsent.defaultProps = {
	cookieName: 'CookieConsent',
	expires: 365
};

export default CookieConsent;