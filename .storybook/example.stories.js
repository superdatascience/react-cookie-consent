import React, { useState, Fragment } from 'react';
import CookieConsent from '../src/index';

export default { title: 'ExampleComponent' };

export const Example = () => {
	return (
		<Fragment>
			<CookieConsent/>
		</Fragment>
	);
}