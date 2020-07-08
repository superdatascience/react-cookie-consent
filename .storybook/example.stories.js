import React from "react";
import CookieConsent from "../src/index";

export default { title: "ExampleComponent" };

export const Example = () => {
	return (
		<CookieConsent
			expires={365}
			cookieName="storybookCookie"
			buttonText="Accept"
		>
			This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you.
		</CookieConsent>
	);
}