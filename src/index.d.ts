import * as React from 'react'

interface CookieConsentProps {
	readonly buttonText?: string,
	readonly children: React.ReactNode;
	readonly cookieName?: string,
	readonly debug?: boolean
	readonly expires?: number
}
type CookieConsentInterface = React.ComponentClass<CookieConsentProps>

declare const CookieConsent: CookieConsentInterface // This line tells the compilar that CookieConsent already exists somewhere else

export default CookieConsent;