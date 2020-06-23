import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import Cookies from 'js-cookie';

const CookieConsent = ({ cookieName, expires, debug, children, buttonText }) => {
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
			{children}
			<button onClick={handleAccept}>{buttonText}</button>
		</div>
	);
}

CookieConsent.propTypes = {
	buttonText: PropTypes.string,
	children: PropTypes.any.isRequired,
	cookieName: PropTypes.string,
	debug: PropTypes.bool,
	expires: PropTypes.number
};

CookieConsent.defaultProps = {
	buttonText: 'Accept',
	cookieName: 'CookieConsent',
	debug: false,
	expires: 365
};

export default CookieConsent;