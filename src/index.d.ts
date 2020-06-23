import * as React from 'react'

interface CookieConsentProps {
	readonly cookieName?: string,
	readonly expires?: number
}
type CookieConsentInterface = React.ComponentClass<CookieConsentProps>

declare const CookieConsent: CookieConsentInterface // This line tells the compilar that CookieConsent already exists somewhere else

export default CookieConsent;