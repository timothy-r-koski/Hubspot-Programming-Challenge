import {isEmpty} from "./utils.js";
import moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD';

const transformData = (data) => {
    if (isEmpty(data)) {
        return "Something is broken";
    }
    const countries = [];
    const possibleStartDates = {};

    data.partners.map(partner => {
        //Add Country if it is missing
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
        //Create list attendees by possible start dates and country
        partner.availableDates.forEach(availableDate => {
            const firstDay = moment(availableDate, DATE_FORMAT);
            const secondDay = firstDay.add(1, 'days').format(DATE_FORMAT);
            if (partner.availableDates.includes(secondDay)) {
                if (!(partner.country in possibleStartDates)) {
                    possibleStartDates[partner.country] = {};
                }
                if (!(availableDate in possibleStartDates[partner.country])) {
                    possibleStartDates[partner.country][availableDate] = [];
                }
                possibleStartDates[partner.country][availableDate].push(partner.email);
            }
        });

    });

    countries.map(country => {
        const updatedCountry = country;
        let mostAttendees = 0;
        if (country.name in possibleStartDates) {
            for (const [startDate, attendeesList] of Object.entries(possibleStartDates[country.name])) {
                const possibleStart = moment(startDate, 'YYYY-MM-DD');
                const currentStart = moment(updatedCountry.startDate, DATE_FORMAT)
                if (attendeesList.length > mostAttendees || (attendeesList.length == mostAttendees && possibleStart < currentStart)) {
                    mostAttendees = attendeesList.length;
                    updatedCountry.attendeeCount = attendeesList.length;
                    updatedCountry.attendees = attendeesList;
                    updatedCountry.startDate = startDate;
                }
            }
        }
        return updatedCountry;
    });

    return {
        "countries": countries
    };
}

export default transformData;