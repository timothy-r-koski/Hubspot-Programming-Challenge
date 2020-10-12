import {isEmpty} from "./utils.js";

const transformData = (data) => {
    if (isEmpty(data)) {
        return "Something is broken";
    }
    return { a: 2 };
}

export default transformData;