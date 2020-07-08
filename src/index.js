import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./styles.css";

const CookieConsent = ({ cookieName, expires, children, buttonText }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (Cookies.get(cookieName) === undefined) setIsVisible(true);
	}, []);

	const setCookie = (cookieValue) => {
		const cookieSecurity = location ? location.protocol === "https:" : true;
		const cookieOptions = { expires, secure: cookieSecurity };
		Cookies.set(cookieName, cookieValue, cookieOptions);
	};

	const handleAccept = () => {
		setCookie(true);
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<div className="cookie-consent">
			{children}
			<button onClick={handleAccept}>{buttonText}</button>
		</div>
	);
};

export default CookieConsent;
