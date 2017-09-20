// App.test.js 

import React from 'react';
import App from '../src/component/MainApp';
import renderer from 'react-test-renderer';


describe("Testing App jsx using jest", function () {
	// body...
	it("Should generate snapshot and test", function() {
		const component = renderer.create(
	    <App />
	  );
	  let tree = component.toJSON();
	  expect(tree).toMatchSnapshot();
	})
})
