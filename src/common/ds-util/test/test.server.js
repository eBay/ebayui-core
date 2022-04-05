import { expect } from 'chai';
import * as util from '../index';

describe('ds-utils', () => {
    it('fetches the correct DS version flags', () => {
        expect(util.getDSVersion('6')).to.equal('6');
        expect(util.getDSVersion('ds6')).to.equal('6');
        expect(util.getDSVersion('4')).to.equal('4');
        expect(util.getDSVersion('abc4')).to.equal('abc4');
        expect(util.getDSVersion('dsn')).to.equal('n');
        expect(util.getDSVersion()).to.equal('6');
    });

    it('should get the right flag', () => {
        expect(util.getDSFlags('6')).to.deep.equal({});
        expect(util.getDSFlags('ds6')).to.deep.equal({});
        expect(util.getDSFlags('ds4')).to.deep.equal({ 'ds-4': true });
    });
    it('should get the right index', () => {
        expect(util.getDSFromFlag('ds-6')).to.deep.equal(0);
        expect(util.getDSFromFlag('ds-4')).to.deep.equal(1);
        expect(util.getDSFromFlag('')).to.deep.equal(0);
        expect(util.getDSFromFlag(null)).to.deep.equal(0);
    });
});
