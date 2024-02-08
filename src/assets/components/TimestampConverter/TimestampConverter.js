export function convertedTimestamp(epochTimestamp) {
    //Function for adding a zero to the front of each single-digit number
    const addZero = (num) => {
        if (num < 10) {
            num = "0" + num.toString();
            return num;
        } else {
            return num;
        }
    };

    const date = new Date(epochTimestamp);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    const currentDate = `${addZero(month)}/${addZero(day)}/${year}`;
    return currentDate;
}

export default convertedTimestamp;
