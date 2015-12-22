jest.dontMock('../../src/js/components/Navigation');

const React = require('react');
const TestUtils = require('react-addons-test-utils');
const Navigation = require('../../src/js/components/Navigation');

describe('Navigation', function () {
    const component = TestUtils.renderIntoDocument(
        <Navigation />
    );

    it('should render correctly', function () {
        const navigation = TestUtils.scryRenderedComponentsWithType(component, Navigation);

        expect(navigation.length).toEqual(1);
    });

});
