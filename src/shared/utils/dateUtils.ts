export const displayHourTime = (date: Date) => {
    if (!date) {
        return;
    }

    return `${String(date.getHours()).padStart(2, "0")}:${String(
        date.getMinutes()
    ).padStart(2, "0")}`;
};

// File: utils/monthNames.ts

// If you’re treating this as a plain object, it’s more idiomatic to use `Record<number, string>`:
export const monthNames: Record<number, string> = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
};

export const announceDate = (date: Date) => {
    return (
        // monthNames[date.getMonth()] +
        // " " +
        // date.getDate() +
        // ", " +
        // date.getFullYear() +
        // " " +
        // date.getUTCHours() +
        // ":"
        date.toLocaleString()
    );
};
