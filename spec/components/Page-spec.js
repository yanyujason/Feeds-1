jest.dontMock('../../src/js/components/Page');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('Page', function () {
    const Page = require('../../src/js/components/Page');
    const Banner = require('../../src/js/components/Banner');
    const Navigation = require('../../src/js/components/Navigation');
    const Feeds = require('../../src/js/components/Feeds');
    const component = TestUtils.renderIntoDocument(
        <Page />
    );

    it('should render correctly', function () {
        const page = TestUtils.scryRenderedComponentsWithType(component, Page);

        expect(page.length).toEqual(1);
    });

    it('should render banner correctly', function(){
        const banner = TestUtils.scryRenderedComponentsWithType(component, Banner);

        expect(banner.length).toEqual(1);
    });

    it('should render navigation correctly', function(){
        const navigation = TestUtils.scryRenderedComponentsWithType(component, Navigation);

        expect(navigation.length).toEqual(1);
    });

    it('should render feeds correctly', function(){
        const feeds = TestUtils.scryRenderedComponentsWithType(component, Feeds);

        expect(feeds.length).toEqual(1);
    });
});
