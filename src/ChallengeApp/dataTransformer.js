import {isEmpty} from "./utils.js";

const transformData = (data) => {
    if (isEmpty(data)) {
        return "Something is broken";
    }
    const countries = [];

    data.partners.forEach(partner => {
        if (!countries.some(country => country.name === partner.country)) {
            countries.push(
                {
                    "attendeeCount": 0,
                    "attendees": [],
                    "name": partner.country,
                    "startDate": null
                }
            );
        }
    });

    return {
        "countries": countries
    };
}

export default transformData;