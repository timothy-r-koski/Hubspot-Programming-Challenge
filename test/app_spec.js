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
            const getReply = '{"get":"matched"}';
            const postReply = '{"post":"matched"}';

            beforeEach(() => {
                nock('http://xkcd.com/')
                    .get('/info.0.json')
                    .reply(200, getReply);

                nock('https://httpbin.org/')
                    .post('/post')
                    .reply(200, postReply);
            });

            afterEach(() => {
                nock.cleanAll();
            });

            it('Then: response is 200', (done) => {
                chai.request(server)
                    .get('/helloWorld')
                    .end((err, res) => {
                        expect(res.status).to.equal(200);
                        done();
                    });
            });
            it('And: response is mocked post reply', (done) => {
                chai.request(server)
                    .get('/helloWorld')
                    .end((err, res) => {
                        expect(JSON.stringify(res.body)).to.equal(postReply);
                        done();
                    });
            });
        });
    });
});