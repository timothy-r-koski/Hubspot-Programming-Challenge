import transformData from '../dataTransformer.js';
import chai from 'chai';

const expect = chai.expect;

describe('Given: Data Transformer', function () {
    describe('When: data is passed to the transformer', function () {
        const transformedData = transformData({some: 'data'});
        it('Then: return object with field a equals 2', function () {
            expect(transformedData.a).to.equal(2);
        });
    });
    describe('When: undefined is passed to the transformer', function () {
        const transformedData = transformData(undefined);
        it('Then: return "Something is broken"', function () {
            expect(transformedData).to.equal("Something is broken");
        });
    });
    describe('When: empty data is passed to the transformer', function () {
        const transformedData = transformData({});
        it('Then: return "Something is broken"', function () {
            expect(transformedData).to.equal("Something is broken");
        });
    });
});