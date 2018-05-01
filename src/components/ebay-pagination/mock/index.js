const renderBody = (stream) => stream.write('1');
module.exports = {
    basicLinks: {
        'aria-label-previous': 'Previous page',
        'aria-label-next': 'Next page',
        'curr-text': 'Results Pagination - Page 2',
        items: [
            {
                type: 'previous',
                href: 'https://www.ebay.com/'
            },
            {
                renderBody,
                href: 'https://www.ebay.com/'
            },
            {
                current: true,
                renderBody,
                href: 'https://www.ebay.com/'
            },
            {
                renderBody,
                href: 'https://www.ebay.com/'
            },
            {
                renderBody,
                href: 'https://www.ebay.com/'
            },
            {
                renderBody,
                href: 'https://www.ebay.com/'
            },
            {
                renderBody,
                href: 'https://www.ebay.com/'
            },
            {
                renderBody,
                href: 'https://www.ebay.com/'
            },
            {
                renderBody,
                href: 'https://www.ebay.com/'
            },
            {
                renderBody,
                href: 'https://www.ebay.com/'
            },
            {
                type: 'next',
                href: 'https://www.ebay.com/'
            }
        ]
    },
    hijax: {
        'ariaLabelPrevious': 'Previous page',
        'ariaLabelNext': 'Next page',
        'currText': 'Results Pagination - Page 2',
        'hijax': true,
        items: [
            {
                type: 'previous',
                href: 'https://www.ebay.com/'
            },
            {
                current: true,
                renderBody,
                href: 'https://www.ebay.com/'
            },
            {
                renderBody,
                href: 'https://www.ebay.com/'
            },
            {
                type: 'next',
                href: 'https://www.ebay.com/'
            }
        ]
    },
    basicLinksWithoutCurrent: {
        'ariaLabelPrevious': 'Previous page',
        'ariaLabelNext': 'Next page',
        'currText': 'Results Pagination - Page X',
        'fakeLink': true,
        items: [
            {
                type: 'previous',
                href: 'https://www.ebay.com/'
            },
            {
                renderBody,
                href: 'https://www.ebay.com/'
            },
            {
                renderBody,
                href: 'https://www.ebay.com/'
            },
            {
                type: 'next',
                href: 'https://www.ebay.com/'
            }
        ]
    },
    basicLinksWithoutNavigation: {
        'ariaLabelPrevious': 'Previous page',
        'ariaLabelNext': 'Next page',
        'currText': 'Results Pagination - Page 1',
        'fakeLink': true,
        items: [
            {
                current: true,
                renderBody,
                href: 'https://www.ebay.com/'
            }
        ]
    },
    disabledNavigation: {
        'ariaLabelPrevious': 'Previous page',
        'ariaLabelNext': 'Next page',
        'currText': 'Results Pagination - Page 2',
        items: [
            {
                type: 'previous'
            },
            {
                current: true,
                renderBody,
                href: 'https://www.ebay.com/'
            },
            {
                type: 'next',
                disabled: true
            }
        ]
    }
};
