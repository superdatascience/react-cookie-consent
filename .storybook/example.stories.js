import React, { useState, Fragment } from 'react';
import CookieConsent from '../src/index';

export default { title: 'ExampleComponent' };

export const Example = () => {
	return (
		<Fragment>
			<CookieConsent debug={true}>
			This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you.
			</CookieConsent>
		</Fragment>
	);
}