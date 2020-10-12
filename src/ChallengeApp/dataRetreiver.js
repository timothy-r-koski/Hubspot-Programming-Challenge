import fetch from 'node-fetch';
const url = "https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=4bcee3a6a2706ec3d5705ef5dd35";

const getData = async() => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

export default getData;