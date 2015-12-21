jest.dontMock('../../src/js/components/Banner');

const React = require('react');
const TestUtils = require('react-addons-test-utils');
const Banner = require('../../src/js/components/Banner');

describe('Banner', function () {
    const component = TestUtils.renderIntoDocument(
        <Banner />
    );

    it('should render correctly', function () {
        const banner = TestUtils.scryRenderedComponentsWithType(component, Banner);

        expect(banner.length).toEqual(1);
    });

});
