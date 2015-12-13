jest.dontMock('../../src/js/components/Feed');

const React = require('react');
const TestUtils = require('react-addons-test-utils');
const Feed = require('../../src/js/components/Feed');
const MainPhoto = require('../../src/js/components/MainPhoto');

describe('Feed', function () {
    const feedData = {
        "id": "1",
        "imageUrl": "www.test.com/main.jpg",
        "title": "A Title",
        "summary": "This is the summary",
        "source": "icodeit.org"
    }

    const component = TestUtils.renderIntoDocument(
        <Feed key={feedData.id} feed={feedData}/>
    );

    it('should render correctly', function () {
        const feed = TestUtils.scryRenderedComponentsWithType(component, Feed);
        expect(feed.length).toEqual(1);
    });

    it('should render main photo correctly', function () {
        const mainPhoto = TestUtils.scryRenderedComponentsWithType(component, MainPhoto);

        expect(mainPhoto.length).toEqual(1);
    });

    it('should render title correctly', function () {
        const title = TestUtils.findRenderedDOMComponentWithClass(component, 'feed-title');

        expect(title.textContent).toEqual("A Title");
    });

    it('should render summary correctly', function () {
        const summary = TestUtils.findRenderedDOMComponentWithClass(component, 'feed-summary');

        expect(summary.textContent).toEqual("This is the summary");
    });

    it('should render source correctly', function () {
        const source = TestUtils.findRenderedDOMComponentWithClass(component, 'feed-source');

        expect(source.textContent).toEqual("icodeit.org");
    });
});
