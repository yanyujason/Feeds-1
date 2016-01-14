jest.dontMock('../../src/js/components/Navigation');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('Navigation', function () {
    const Navigation = require('../../src/js/components/Navigation');
    const component = TestUtils.renderIntoDocument(
        <Navigation />
    );

    it('should render correctly', function () {
        const navigation = TestUtils.scryRenderedComponentsWithType(component, Navigation);

        expect(navigation.length).toEqual(1);
    });

});
