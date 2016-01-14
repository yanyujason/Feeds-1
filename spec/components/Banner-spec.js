jest.dontMock('../../src/js/components/Banner');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('Banner', function () {
    const Banner = require('../../src/js/components/Banner');
    const component = TestUtils.renderIntoDocument(
        <Banner />
    );

    it('should render correctly', function () {
        const banner = TestUtils.scryRenderedComponentsWithType(component, Banner);

        expect(banner.length).toEqual(1);
    });

});
