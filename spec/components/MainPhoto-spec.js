jest.dontMock('../../src/js/components/MainPhoto');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('MainPhoto', function () {
    const MainPhoto = require('../../src/js/components/MainPhoto');
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
