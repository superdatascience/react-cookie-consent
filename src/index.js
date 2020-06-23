import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Cookies from 'js-cookie';

const CookieConsent = ({ cookieName, expires }) => {


	const setCookie = (cookieValue) => {
		const cookieSecurity = location ? location.protocol === "https:" : true;
		const cookieOptions = { expires, secure: cookieSecurity };
		console.log(cookieName, cookieValue)
		Cookies.set(cookieName, cookieValue, cookieOptions);
	}

	const handleAccept = () => {
		setCookie(true);
	}

	return (
		<div>
			Cookie Consent here
			<button onClick={handleAccept}>I Accept</button>
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