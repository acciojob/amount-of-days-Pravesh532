function daysOfAYear(year) {
    if (!Number.isInteger(year) || year < 1 || year > 9999) {
        throw new Error("Invalid year! Please enter a year between 1 and 9999.");
    }

    // Leap year condition
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    return isLeap ? 366 : 365;
}