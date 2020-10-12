import transformData from '../dataTransformer.js';
import chai from 'chai';

const expect = chai.expect;

describe('Given: Data Transformer', function () {
    describe('When: data is passed to the transformer', function () {
        const data = {
            "partners": [
                {
                    "firstName": "Darin",
                    "lastName": "Daignault",
                    "email": "ddaignault@hubspotpartners.com",
                    "country": "United States",
                    "availableDates": [
                        "2017-05-03",
                        "2017-05-06"
                    ]
                },
                {
                    "firstName": "Crystal",
                    "lastName": "Brenna",
                    "email": "cbrenna@hubspotpartners.com",
                    "country": "Ireland",
                    "availableDates": [
                        "2017-04-27",
                        "2017-04-29",
                        "2017-04-30"
                    ]
                },
                {
                    "firstName": "Janyce",
                    "lastName": "Gustison",
                    "email": "jgustison@hubspotpartners.com",
                    "country": "Spain",
                    "availableDates": [
                        "2017-04-29",
                        "2017-04-30",
                        "2017-05-01"
                    ]
                },
                {
                    "firstName": "Tifany",
                    "lastName": "Mozie",
                    "email": "tmozie@hubspotpartners.com",
                    "country": "Spain",
                    "availableDates": [
                        "2017-04-28",
                        "2017-04-29",
                        "2017-05-01",
                        "2017-05-04"
                    ]
                },
                {
                    "firstName": "Temple",
                    "lastName": "Affelt",
                    "email": "taffelt@hubspotpartners.com",
                    "country": "Spain",
                    "availableDates": [
                        "2017-04-28",
                        "2017-04-29",
                        "2017-05-02",
                        "2017-05-04"
                    ]
                },
                {
                    "firstName": "Robyn",
                    "lastName": "Yarwood",
                    "email": "ryarwood@hubspotpartners.com",
                    "country": "Spain",
                    "availableDates": [
                        "2017-04-29",
                        "2017-04-30",
                        "2017-05-02",
                        "2017-05-03"
                    ]
                },
                {
                    "firstName": "Shirlene",
                    "lastName": "Filipponi",
                    "email": "sfilipponi@hubspotpartners.com",
                    "country": "Spain",
                    "availableDates": [
                        "2017-04-30",
                        "2017-05-01"
                    ]
                },
                {
                    "firstName": "Oliver",
                    "lastName": "Majica",
                    "email": "omajica@hubspotpartners.com",
                    "country": "Spain",
                    "availableDates": [
                        "2017-04-28",
                        "2017-04-29",
                        "2017-05-01",
                        "2017-05-03"
                    ]
                },
                {
                    "firstName": "Wilber",
                    "lastName": "Zartman",
                    "email": "wzartman@hubspotpartners.com",
                    "country": "Spain",
                    "availableDates": [
                        "2017-04-29",
                        "2017-04-30",
                        "2017-05-02",
                        "2017-05-03"
                    ]
                },
                {
                    "firstName": "Eugena",
                    "lastName": "Auther",
                    "email": "eauther@hubspotpartners.com",
                    "country": "United States",
                    "availableDates": [
                        "2017-05-04",
                        "2017-05-09"
                    ]
                }
            ]
        };
        const transformedData = transformData(data);
        it('Then: returns object that contains an array of correct length', function () {
            expect(transformedData.countries.length).to.equal(3);
        });
        it('And: returns object that contains an array of correct length', function () {
            expect(transformedData.countries.length).to.equal(3);
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