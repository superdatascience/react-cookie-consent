import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import Cookies from 'js-cookie';

const CookieConsent = ({ cookieName, expires, debug }) => {
	const [isVisible, setIsVisible] = useState(true);

	const getCookieValue = () => {
		// Legacy Cookie is being ignored
		let cookieValue = Cookies.get(cookieName);
		return cookieValue;
	}

	useEffect(() => {
		const cookieValue = !getCookieValue();
		setIsVisible(cookieValue);
	}, [isVisible])

	const setCookie = (cookieValue) => {
		const cookieSecurity = location ? location.protocol === "https:" : true;
		const cookieOptions = { expires, secure: cookieSecurity };
		console.log(cookieName, cookieValue)
		Cookies.set(cookieName, cookieValue, cookieOptions);
	}

	const handleAccept = () => {
		setCookie(true);
		setIsVisible(false);
	}
	if (!isVisible && !debug) return null;

	return (
		<div>
			Cookie Consent here
			<button onClick={handleAccept}>I Accept</button>
		</div>
	);
}

CookieConsent.propTypes = {
	cookieName: PropTypes.string,
	expires: PropTypes.number,
	debug: PropTypes.bool
};

CookieConsent.defaultProps = {
	cookieName: 'CookieConsent',
	expires: 365,
	debug: false
};

export default CookieConsent;