# POST /feeds
+ Request
    + Headers
    Content-Type:application/json;Accept: application/json
    + Body
    {"uid":"1"}
+ Response 201 (application/json)
[
    {
        "id": "1",
        "title": "Title 1",
        "summary": "This is the summary",
        "source": "icodeit.org"
    },
    {
        "id": "2",
        "title": "Title 2",
        "summary": "This is the summary",
        "source": "icodeit.org"
    }
]