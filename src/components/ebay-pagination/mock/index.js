const renderBody = (stream) => stream.write('1');
module.exports = {
    basicLinks: {
        a11yPreviousText: 'Previous page',
        a11yNextText: 'Next page',
        a11yCurrentText: 'Results Pagination - Page 2',
        items: [
            {
                type: 'previous',
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                current: true,
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                type: 'next',
                href: '#'
            }
        ]
    },
    FifthSelected: {
        a11yPreviousText: 'Previous page',
        a11yNextText: 'Next page',
        a11yCurrentText: 'Results Pagination - Page 2',
        items: [
            {
                type: 'previous',
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                current: true,
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                type: 'next',
                href: '#'
            }
        ]
    },
    EighthSelected: {
        a11yPreviousText: 'Previous page',
        a11yNextText: 'Next page',
        a11yCurrentText: 'Results Pagination - Page 2',
        items: [
            {
                type: 'previous',
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                current: true,
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                type: 'next',
                href: '#'
            }
        ]
    },
    buttons: {
        a11yPreviousText: 'Previous page',
        a11yNextText: 'Next page',
        a11yCurrentText: 'Results Pagination - Page 2',
        items: [
            {
                type: 'previous'
            },
            {
                current: true,
                renderBody
            },
            {
                renderBody
            },
            {
                type: 'next'
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
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                renderBody,
                href: '#'
            },
            {
                type: 'next',
                href: '#'
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
                href: '#'
            }
        ]
    },
    disabledNavigation: {
        a11yPreviousText: 'Previous page',
        a11yNextText: 'Next page',
        a11yCurrentText: 'Results Pagination - Page 2',
        items: [
            {
                type: 'previous',
                disabled: true
            },
            {
                current: true,
                renderBody,
                href: '#'
            },
            {
                type: 'next',
                disabled: true
            }
        ]
    }
};
