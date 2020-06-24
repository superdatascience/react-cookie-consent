import React, { useState, Fragment } from 'react';
import CookieConsent from '../src/index';

export default { title: 'ExampleComponent' };

export const Example = () => {
	return (
		<Fragment>
			<div>
				<h1>This is my page</h1>
				<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit consequuntur veniam architecto aspernatur repellat, velit autem temporibus minus doloribus esse tempora fuga? Quisquam laborum labore itaque repellat nesciunt eveniet.</h1>
				<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit consequuntur veniam architecto aspernatur repellat, velit autem temporibus minus doloribus esse tempora fuga? Quisquam laborum labore itaque repellat nesciunt eveniet.</h1>
				<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit consequuntur veniam architecto aspernatur repellat, velit autem temporibus minus doloribus esse tempora fuga? Quisquam laborum labore itaque repellat nesciunt eveniet.</h1>
				<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit consequuntur veniam architecto aspernatur repellat, velit autem temporibus minus doloribus esse tempora fuga? Quisquam laborum labore itaque repellat nesciunt eveniet.</h1>
				<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit consequuntur veniam architecto aspernatur repellat, velit autem temporibus minus doloribus esse tempora fuga? Quisquam laborum labore itaque repellat nesciunt eveniet.</h1>
				<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit consequuntur veniam architecto aspernatur repellat, velit autem temporibus minus doloribus esse tempora fuga? Quisquam laborum labore itaque repellat nesciunt eveniet.</h1>
			</div>
			<CookieConsent debug={true}>
			This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you.
			</CookieConsent>
		</Fragment>
	);
}