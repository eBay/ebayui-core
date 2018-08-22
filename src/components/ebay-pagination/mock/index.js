const renderBody = (stream) => stream.write('1');
module.exports = {
    basicLinks: {
        a11yPreviousText: 'Previous page',
        a11yNextText: 'Next page',
        a11yCurrentText: 'Results Pagination - Page 2',
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
        a11yPreviousText: 'Previous page',
        a11yNextText: 'Next page',
        a11yCurrentText: 'Results Pagination - Page 2',
        hijax: true,
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
        a11yPreviousText: 'Previous page',
        a11yNextText: 'Next page',
        a11yCurrentText: 'Results Pagination - Page X',
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
        a11yPreviousText: 'Previous page',
        a11yNextText: 'Next page',
        a11yCurrentText: 'Results Pagination - Page 1',
        items: [
            {
                current: true,
                renderBody,
                href: 'https://www.ebay.com/'
            }
        ]
    },
    disabledNavigation: {
        a11yPreviousText: 'Previous page',
        a11yNextText: 'Next page',
        a11yCurrentText: 'Results Pagination - Page 2',
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
