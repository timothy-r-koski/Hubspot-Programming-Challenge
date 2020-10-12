import fetch from 'node-fetch';

const url = 'https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=4bcee3a6a2706ec3d5705ef5dd35';

const postData = async (data) => {
    try {
        const response = await fetch(url,
            {
                method: 'post',
                body: JSON.stringify(data),
                headers: {'Content-Type': 'application/json'},
            });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

export default postData;