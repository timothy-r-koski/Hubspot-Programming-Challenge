import express from 'express';
import transformData from './ChallengeApp/dataTransformer.js';
import getData from './ChallengeApp/dataRetreiver.js';
import postData from "./ChallengeApp/dataPoster.js";

const app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/hubspotProject", async(req, res) => {
    let data = await getData();
    const transformedData = transformData(data);
    let response = await postData(transformedData);

    res.json(response);
});

export default app; // for testing
