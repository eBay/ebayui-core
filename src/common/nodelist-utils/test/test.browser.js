const expect = require('chai').expect;
const NodeListUtils = require('../');
const findNodeWithFirstChar = NodeListUtils.findNodeWithFirstChar;
const container = document.createElement('div');

container.innerHTML = `
    <ul id="list1">
        <li>Ringo</li>
        <li>Paul</li>
        <li>George</li>
    </ul>
    <ul id="list2">
        <li>Bruce</li>
        <li>Bruce</li>
        <li>Bruce</li>
    </ul>
    <ul id="list3">
        <li></li>
        <li></li>
        <li></li>
    </ul>
`;

describe('NodeListUtils.findNodeWithFirstChar', () => {
    describe('given three nodes with different first letters (R, P, G)', () => {
        const nodeList = container.querySelectorAll('#list1 li');

        describe('when "r" is input', () => {
            test('then 0 is returned', () => {
                expect(findNodeWithFirstChar(nodeList, 'r')).to.equal(0);
            });
        });

        describe('when "p" is input', () => {
            test('then 1 is returned', () => {
                expect(findNodeWithFirstChar(nodeList, 'p')).to.equal(1);
            });
        });

        describe('when "g" is input', () => {
            test('then 2 is returned', () => {
                expect(findNodeWithFirstChar(nodeList, 'g')).to.equal(2);
            });
        });

        describe('when "j" is input', () => {
            test('then undefined is returned', () => {
                expect(findNodeWithFirstChar(nodeList, 'j')).to.equal(-1);
            });
        });

        describe('when "" is input', () => {
            test('then undefined is returned', () => {
                expect(findNodeWithFirstChar(nodeList, '')).to.equal(-1);
            });
        });
    });

    describe('given three nodes with same first letters (B, B, B)', () => {
        const nodeList = container.querySelectorAll('#list2 li');

        describe('when "b" is input', () => {
            test('then 0 is returned', () => {
                expect(findNodeWithFirstChar(nodeList, 'b')).to.equal(0);
            });
        });

        describe('when "" is input', () => {
            test('then undefined is returned', () => {
                expect(findNodeWithFirstChar(nodeList, '')).to.equal(-1);
            });
        });
    });

    describe('given three nodes with empty innerText', () => {
        const nodeList = container.querySelectorAll('#list3 li');

        describe('when "" is input', () => {
            test('then 0 is returned', () => {
                expect(findNodeWithFirstChar(nodeList, '')).to.equal(0);
            });
        });

        describe('when "b" is input', () => {
            test('then undefined is returned', () => {
                expect(findNodeWithFirstChar(nodeList, 'b')).to.equal(-1);
            });
        });
    });
});
