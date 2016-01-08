jest.dontMock('../../src/js/components/MainPhoto');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const MainPhoto = require('../../src/js/components/MainPhoto');

describe('MainPhoto', function () {
    const componentWithImageUrl = TestUtils.renderIntoDocument(
        <MainPhoto imageUrl="www.test.com/main.jpg"/>
    );

    const componentWithOutImageUrl = TestUtils.renderIntoDocument(
        <MainPhoto />
    );

    it('should render correctly', function () {
        const mainPhoto = TestUtils.scryRenderedComponentsWithType(componentWithImageUrl, MainPhoto);

        expect(mainPhoto.length).toEqual(1);
    });

    it('should set src correctly when imageUrl exists', function () {
        const src = ReactDOM.findDOMNode(componentWithImageUrl).src;

        expect(src).toEqual("www.test.com/main.jpg");
    });

    it('should set src correctly when imageUrl does not exist', function () {
        const src = ReactDOM.findDOMNode(componentWithOutImageUrl).src;

        expect(src).toEqual("./public/img/default.png");
    });
});
