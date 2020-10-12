//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
import chai from 'chai';
import chaiHttp from 'chai-http';
import nock from 'nock';
import server from '../src/index.js';

const expect = chai.expect;

chai.use(chaiHttp);
//Our parent block
describe('ChallengeApp', () => {
    describe('Given: The Server is running', () => {
        describe('When: a user makes a get request', () => {
            const getReply = {
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
            const postResponse = {
                "message": "Results match! Congratulations!"
            };

            beforeEach(() => {
                nock('https://candidate.hubteam.com/')
                    .get('/candidateTest/v3/problem/dataset?userKey=4bcee3a6a2706ec3d5705ef5dd35')
                    .reply(200, getReply);
                nock('https://candidate.hubteam.com/')
                    .post(
                        '/candidateTest/v3/problem/result?userKey=4bcee3a6a2706ec3d5705ef5dd35',
                        body => !!body.countries
                    )
                    .reply(200, postResponse);
            });

            afterEach(() => {
                nock.cleanAll();
            });

            it('Then: response is 200', (done) => {
                chai.request(server)
                    .get('/hubspotProject')
                    .end((err, res) => {
                        expect(res.status).to.equal(200);
                        done();
                    });
            });
            it('And: response contains the correct number of elements', (done) => {
                chai.request(server)
                    .get('/hubspotProject')
                    .end((err, res) => {
                        expect(JSON.stringify(res.body)).to.eq(JSON.stringify(postResponse));
                        done();
                    });
            });
        });
    });
});