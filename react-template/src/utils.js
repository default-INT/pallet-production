/**
 *
 * @param date {Date}
 * @constructor
 */
const dateConverter = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return (day < 10 ? '0' + day : day) + '.' +
        (month < 9 ? '0' + (month + 1) : (month + 1)) + '.' + year;
};

/**
 *
 * @param date1 {Date}
 * @param date2 {Date}
 * @return {boolean}
 */
const eqDate = (date1, date2) =>
    date1.getFullYear() === date2.getFullYear()
    && date1.getMonth() === date2.getMonth()
    && date1.getDate() === date2.getDate();

export default {dateConverter, eqDate}