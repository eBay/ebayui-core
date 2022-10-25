export const mock = {
    values: [
        {
            value: '7',
            text: 'Value 1',
            percentage: 0.5,
        },
        {
            value: '3',
            text: 'Value 2',
            percentage: 0.3,
        },
        {
            value: '2',
            text: 'Value 3',
            percentage: 0.2,
        },
    ],
};

export const mockFive = {
    ...mock,
    values: [
        ...mock.values,
        {
            value: '7',
            text: 'Value 4',
            percentage: 0.2,
        },
        {
            value: '1',
            text: 'Value 5',
            percentage: 0.25,
        }
    ],
};
