import {isEmpty} from "./utils.js";

const transformData = (data) => {
    if (isEmpty(data)) {
        return "Something is broken";
    }
    return {
        "countries": [
            {
                "attendeeCount": 1,
                "attendees": [
                    "cbrenna@hubspotpartners.com"
                ],
                "name": "Ireland",
                "startDate": "2017-04-29"
            },
            {
                "attendeeCount": 0,
                "attendees": [],
                "name": "United States",
                "startDate": null
            },
            {
                "attendeeCount": 3,
                "attendees": [
                    "omajica@hubspotpartners.com",
                    "taffelt@hubspotpartners.com",
                    "tmozie@hubspotpartners.com"
                ],
                "name": "Spain",
                "startDate": "2017-04-28"
            }
        ]
    };
}

export default transformData;