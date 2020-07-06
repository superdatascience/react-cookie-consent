// Link.react.test.js
import React from 'react';
import CookieConsent from '../src/index';
import renderer from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;

test('Cookie Consent Dissapears after clicked in live mode', () => {
  const component = renderer.create(
		<CookieConsent debug={false}>
			This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you.
		</CookieConsent>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  //manually trigger click
  act(() => {
	tree.children[1].props.onClick();
  });

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toBe(null);
});

test('Cookie Consent stays after clicked on debug mode', () => {
	const component = renderer.create(
		 <CookieConsent debug={true}>
			 This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you.
		 </CookieConsent>
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
 	//manually trigger click
	act(() => {
	 tree.children[1].props.onClick();
	});

	tree = component.toJSON();
	expect(tree).toMatchSnapshot();
	expect(tree).not.toBe(null);
 });